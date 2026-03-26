// Sistema de filtrado por habilidades

document.addEventListener('DOMContentLoaded', function() {
    const filtros = document.querySelectorAll('.filtro-boton');
    const tarjetas = document.querySelectorAll('.card-index');
    const contadorSpan = document.getElementById('contador-resultados');
    
    function filtrarPorSkill(skillSeleccionada) {
        let contadorVisibles = 0;
        
        tarjetas.forEach(tarjeta => {
            const skillsTarjeta = tarjeta.getAttribute('data-skills');
            
            if (skillSeleccionada === 'todos') {
                tarjeta.classList.remove('oculto');
                contadorVisibles++;
            } else {
                if (skillsTarjeta && skillsTarjeta.split(',').map(s => s.trim()).includes(skillSeleccionada)) {
                    tarjeta.classList.remove('oculto');
                    contadorVisibles++;
                } else {
                    tarjeta.classList.add('oculto');
                }
            }
        });
        
        if (skillSeleccionada === 'todos') {
            contadorSpan.textContent = `📊 Mostrando ${contadorVisibles} integrantes (todos)`;
        } else {
            contadorSpan.textContent = `🔍 Mostrando ${contadorVisibles} integrante(s) con la habilidad: ${skillSeleccionada}`;
        }
        
        filtros.forEach(btn => {
            btn.classList.remove('activo');
            if (btn.getAttribute('data-skill') === skillSeleccionada) {
                btn.classList.add('activo');
            }
        });
    }
    
    filtros.forEach(boton => {
        boton.addEventListener('click', () => {
            const skill = boton.getAttribute('data-skill');
            filtrarPorSkill(skill);
        });
    });
});