let maindiv = document.getElementById('pannelcreate');
function activity1() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Hydrostatic Force on Curved Surface (Parabola)</h5>
        <p>Learning Objective: Calculate </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML = text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act1() {
    let temp_btn = document.getElementById('temp-btn-1');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Caculate", "tb1-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb1-box'>

        <h5>Calculate horizontal & vertical component of total pressure force on curve surface of dam having equation   <span style='display: inline-block;' >
        $$ y = \\frac{x^2}{10} $$</span>. The height 'h' of the dam is ${height} m. Also caulculate resultant & inclination with horizontal. Width is 1 m</h5>
        <br>

        <div style='text-align: center;'><img style='width: 30%;' src='./images/sim1.png'></div>

        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ x = \\sqrt {10y} $$
            </span>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            <span style='display: inline-block;' >
                $$ \\overline h = \\frac{h}{2}  $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal0-inp' > <span id='cal0-val-sp'></span> m
            <br>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            Horizontal Component
            <span style='display: inline-block;' >
                $$ F_x  = \\rho \\times g \\times A \\times \\overline h $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal1-inp' > <span id='cal1-val-sp'></span> N
            <br>
            where A = height x width
            <br>
            <span style='display: inline-block;' >
                $$ \\rho  = 1000 kg/m^3 $$
            </span>
            <br>
            <span style='display: inline-block;' >
                $$ g  = 9.81 m/s^2 $$
            </span>

        </p>


        <p style='text-align: center; font-size: 18px;'>
            Verticle Component (weight of the water on ABC)
            <span style='display: inline-block;' >
                $$ F_y  = \\rho \\times g \\times width \\times \\int_{h = 0}^{10} x dy  $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal2-inp' > <span id='cal2-val-sp'></span> N
            <br>
        </p>


        <p style='text-align: center; font-size: 18px;'>
            Reultant
            <span style='display: inline-block;' >
                $$ F  = \\sqrt {F_{x}^2 + F_{y}^2}  $$
            </span>
            = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal3-inp' > <span id='cal3-val-sp'></span> N
            <br>
        </p>

        <br>

        <p style='text-align: center; font-size: 18px;'>
            Inclination with horizontal
        <span style='display: inline-block;' >
            $$ \\theta = tan^{-1}(\\frac{F_y}{F_x})  $$
        </span>
        = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cal4-inp' > <span id='cal4-val-sp'></span>
    </p>

   

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a1();'  id='temp-btn-120' >Verify</button></div>
        

    
        <br> 

        <div id='nxt' style='display: none;'>
            <div id='tab-1'></div>
        </div>
    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    show_step('tb1-box');
    setTimeout(() => { MathJax.typeset(); }, 300);
    internal_calculations();
}
function internal_calculations() {
    fx = 1000 * 9.81 * height * 1 * (height / 2);
    fy = 1000 * 9.81 * Math.sqrt(10) * ((Math.pow(height, (3 / 2))) / (3 / 2));
    resultant = Math.sqrt((Math.pow(fx, 2)) + (Math.pow(fy, 2)));
    theta = Math.atan2(fy, fx) * (180 / Math.PI);
}
function verify_a1() {
    let btn = document.getElementById('temp-btn-120');
    console.log(`h_bar =. ${height / 2}, fx => ${fx}, fx => ${fy}, resultant => ${resultant}, theta => ${theta}`);
    let inp0 = document.getElementById('cal0-inp');
    let sp0 = document.getElementById('cal0-val-sp');
    let inp1 = document.getElementById('cal1-inp');
    let sp1 = document.getElementById('cal1-val-sp');
    let inp2 = document.getElementById('cal2-inp');
    let sp2 = document.getElementById('cal2-val-sp');
    let inp3 = document.getElementById('cal3-inp');
    let sp3 = document.getElementById('cal3-val-sp');
    let inp4 = document.getElementById('cal4-inp');
    let sp4 = document.getElementById('cal4-val-sp');
    if (!verify_values(parseFloat(inp0.value), height / 2)) {
        alert('The fx is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), fx)) {
        alert('The fx is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), fy)) {
        alert('fy is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp3.value), resultant)) {
        alert('resultant value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp4.value), theta)) {
        alert('theta value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp0.remove();
    sp0.innerText = `${(height / 2).toFixed(4)}`;
    inp1.remove();
    sp1.innerText = `${(fx).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${fy.toFixed(4)}`;
    inp3.remove();
    sp3.innerText = `${resultant.toFixed(4)}`;
    inp4.remove();
    sp4.innerText = `${theta.toFixed(4)}`;
    alert('Your entered values are correct!!');
    let ele = document.getElementById('nxt');
    ele.style.display = 'block';
}
activity1();
//# sourceMappingURL=activity1.js.map