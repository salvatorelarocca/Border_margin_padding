const topSlider = document.getElementById("top_p");
const botSlider = document.getElementById("bot_p");
const lefSlider = document.getElementById("lef_p");
const rigSlider = document.getElementById("rig_p");
const topSlider_m = document.getElementById("top_m");
const botSlider_m = document.getElementById("bot_m");
const lefSlider_m = document.getElementById("lef_m");
const rigSlider_m = document.getElementById("rig_m");
const bordoSlider = document.getElementById("bordo");
const widSlider = document.getElementById("width");
const heiSlider = document.getElementById("height");
const num_t = document.getElementById("num_top");
const num_b = document.getElementById("num_bot");
const num_l = document.getElementById("num_lef");
const num_r = document.getElementById("num_rig");
const num_bor = document.getElementById("num_bor");
const num_w = document.getElementById("num_w");
const num_h = document.getElementById("num_h");
const par = document.getElementById("p0");

const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");

function updatePadding() {
    const topSlider_v = topSlider.value;
    const botSlider_v = botSlider.value;
    const lefSlider_v = lefSlider.value;
    const rigSlider_v = rigSlider.value;
    const topSlider_mv = topSlider_m.value;
    const botSlider_mv = botSlider_m.value;
    const lefSlider_mv = lefSlider_m.value;
    const rigSlider_mv = rigSlider_m.value;
    const bordo_v = bordoSlider.value;
    const width_v = widSlider.value;
    const height_v = heiSlider.value;
    par.style.paddingTop = topSlider_v + 'px';
    par.style.paddingBottom = botSlider_v + 'px';
    par.style.paddingLeft = lefSlider_v + 'px';
    par.style.paddingRight = rigSlider_v + 'px';
    par.style.marginTop = topSlider_mv + 'px';
    par.style.marginBottom = botSlider_mv + 'px';
    par.style.marginLeft = lefSlider_mv + 'px';
    par.style.marginRight = rigSlider_mv + 'px';
    
    par.style.borderWidth = bordo_v + 'px';
    par.style.width = width_v + 'px'; //va in contrasto con il margine destro modificare
    num_t.innerHTML = topSlider_v + 'px';
    num_b.innerHTML = botSlider_v + 'px';
    num_l.innerHTML = lefSlider_v + 'px';
    num_r.innerHTML = rigSlider_v + 'px';
    num_w.innerHTML = width_v + 'px';
    if (radio1.checked) {
        par.style.height = 'auto';
        num_h.innerHTML = 'auto';
        heiSlider.disabled = true;
    } else {
        par.style.height = height_v + 'px';
        num_h.innerHTML = height_v + 'px';
    }
}

function updateRadio(){
    const width_v = widSlider.value;
    const height_v = heiSlider.value;
    if (radio1.checked) {
        par.style.height = 'auto';
        num_h.innerHTML = 'auto';
        heiSlider.disabled = true;
    } else {
        par.style.height = height_v + 'px';
        num_h.innerHTML = height_v + 'px';
        heiSlider.disabled = false;
    }
}

topSlider.addEventListener("input", updatePadding);
botSlider.addEventListener("input", updatePadding);
lefSlider.addEventListener("input", updatePadding);
rigSlider.addEventListener("input", updatePadding);
topSlider_m.addEventListener("input", updatePadding);
botSlider_m.addEventListener("input", updatePadding);
lefSlider_m.addEventListener("input", updatePadding);
rigSlider_m.addEventListener("input", updatePadding);
bordoSlider.addEventListener("input", updatePadding);
widSlider.addEventListener("input", updatePadding);
heiSlider.addEventListener("input", updatePadding);
radio1.addEventListener("click", updateRadio);
radio2.addEventListener("click", updateRadio);

// Aggiornamento iniziale del colore
updatePadding();