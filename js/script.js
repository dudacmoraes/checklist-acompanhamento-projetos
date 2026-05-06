// VARIÁVEIS GLOBAIS – MODAL (DOM PORTAL)
let currentMovedElement = null;
let originalParent = null;
let currentMode = 'standard';

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('dnxMode') || 'standard';
    currentMode = savedMode;

    renderTimeline();
    restoreProgress();
    setMode(savedMode);
});

// RENDERIZAÇÃO DINÂMICA
function renderTimeline() {
    const timeline = document.getElementById('timeline');
    timeline.innerHTML = '';

    const fasesAtivas = fases[currentMode];

    fasesAtivas.forEach(fase => {
        const phaseEl = document.createElement('div');
        phaseEl.className = `phase ${currentMode === 'standard' ? 'std' : 'adv'}`;
        phaseEl.id = fase.id;

        phaseEl.innerHTML = `
            <div class="phase-num">${fase.numero}</div>
            <div class="phase-content">
                <h3 class="phase-title">${fase.titulo}</h3>
                <span class="phase-subtitle">${fase.subtitulo}</span>
                <ul class="checklist"></ul>
                ${fase.tag ? `<div class="tags-container"><span class="tag highlight">${fase.tag}</span></div>` : ''}
            </div>
        `;

        const checklist = phaseEl.querySelector('.checklist');

        fase.itens.forEach((item, index) => {
            const checkItem = document.createElement('li');
            checkItem.className = 'check-item';
            checkItem.dataset.id = `${fase.id}-item-${index}`;

            // Item simples
            if (!item.subItens) {
                checkItem.innerHTML = `
                    <div class="item-row" onclick="toggleCheck(this.parentElement)">
                        <div class="checkbox"></div>
                        ${item.texto}
                    </div>
                `;
            }
            // Item com sub-itens (modal)
            else {
                const subId = `${fase.id}-sub-${index}`;

                checkItem.innerHTML = `
                    <div class="item-row">
                        <button class="icon-open"
                            onclick="openModal(event, '${subId}', '${item.modalTitulo || 'Detalhes'}')">↗</button>
                        <div class="checkbox"
                            onclick="toggleCheck(this.parentElement.parentElement)"></div>
                        <span onclick="toggleCheck(this.parentElement.parentElement)">
                            ${item.texto}
                        </span>
                    </div>
                    <ul id="${subId}" class="sub-list">
                        ${item.subItens.map(sub => `
                            <li class="check-item" data-id="${subId}-${sub}">
                                <div class="item-row" onclick="toggleCheck(this.parentElement)">
                                    <div class="checkbox"></div>${sub}
                                </div>
                            </li>
                        `).join('')}
                    </ul>
                `;
            }
            checklist.appendChild(checkItem);
        });
        timeline.appendChild(phaseEl);
    });
    restoreProgress();
    updateDashboard();
}

// MODAL – DOM MOVE
function openModal(event, contentId, title) {
    event.stopPropagation();

    if (currentMovedElement) closeModalDirect();

    const content = document.getElementById(contentId);
    if (!content) return;

    const modal = document.getElementById('modalOverlay');
    const modalBody = document.getElementById('modalBody');

    originalParent = content.parentElement;
    currentMovedElement = content;

    modalBody.appendChild(content);
    document.getElementById('modalTitle').innerText = title;
    modal.style.display = 'flex';
}

function closeModalDirect() {
    const modal = document.getElementById('modalOverlay');

    if (currentMovedElement && originalParent) {
        originalParent.appendChild(currentMovedElement);
    }

    currentMovedElement = null;
    originalParent = null;
    modal.style.display = 'none';
}

function closeModal(event) {
    if (event.target.id === 'modalOverlay') {
        closeModalDirect();
    }
}

// CHECKLIST + LOCALSTORAGE
function toggleCheck(element) {
    event.stopPropagation();
    element.classList.toggle('checked');
    saveProgress();
    updateDashboard();
}

function saveProgress() {
    const checked = [...document.querySelectorAll('.check-item.checked')]
        .map(item => item.dataset.id)
        .filter(Boolean);

    localStorage.setItem('dnxProgressID', JSON.stringify(checked));
}

function restoreProgress() {
    const saved = JSON.parse(localStorage.getItem('dnxProgressID')) || [];
    saved.forEach(id => {
        const el = document.querySelector(`.check-item[data-id="${id}"]`);
        if (el) el.classList.add('checked');
    });
}


// MODOS (FLUXO BASE / AVANÇADO)
function setMode(mode) {
    currentMode = mode;
    localStorage.setItem('dnxMode', mode);

    document.getElementById('btn-std').className = 'btn-mode';
    document.getElementById('btn-adv').className = 'btn-mode';

    if (mode === 'standard') {
        document.getElementById('btn-std').classList.add('active-std');
    } else {
        document.getElementById('btn-adv').classList.add('active-adv');
    }

    renderTimeline();
}

// DASHBOARD DE PROGRESSO
function updateDashboard() {
    const items = document.querySelectorAll('.check-item');
    const total = items.length;
    const checked = document.querySelectorAll('.check-item.checked').length;

    const percent = total === 0 ? 0 : Math.round((checked / total) * 100);

    document.getElementById('progressBar').style.width = `${percent}%`;
    document.getElementById('progressPercent').innerText = `${percent}%`;
    document.getElementById('progress-text').innerText =
        `${checked} de ${total} etapas`;
}
