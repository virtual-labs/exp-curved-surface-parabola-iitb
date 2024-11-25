function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <p>Learning Objective: Calculate Moment of Intertia of rectangular plate and h<sup>*</sup> </p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act2();' id='temp-btn-2' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for starting first activity
function start_act2() {
    let temp_btn = document.getElementById('temp-btn-2');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Calculate position of center of pressure force", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>


    <h5> Moment of Inertia About Centre of Gravity</h5>

    <p style='text-align: center; font-size: 18px;'>
        <span style='display: inline-block;' >
            $$ I_G = \\frac{bd^3}{12}$$
        </span>
        = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cala1-inp' > <span id='cala1-val-sp'></span> m<sup>4</sup>
    </p>


    <h5> Position of center of pressure force.</h5>

    <p style='text-align: center; font-size: 18px;'>
        <span style='display: inline-block;' >
            $$ h^* = \\frac{I_G \\times sin^2(\\theta)}{A \\times \\overline h} + \\overline h $$
        </span>
        = <input type='number' class='form-control' style='display: inline !important; width: 120px;' id='cala2-inp' > <span id='cala2-val-sp'></span> m
    </p>
    
        <br>

        <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify_a2();'  id='temp-btn-20' >Verify</button></div>
        
    </div>

    `;
    maindiv.innerHTML += text;
    show_step('tb2-box');
    internal_calculations1();
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function internal_calculations1() {
    Ig = (width * (Math.pow(depth, 3))) / 12;
    h_star = ((Ig * (Math.pow(Math.sin((Math.PI / 180) * angle), 2))) / (A * h_bar)) + h_bar;
}
function verify_a2() {
    let btn = document.getElementById('temp-btn-20');
    console.log(`Ig => ${Ig}, h_star => ${h_star}`);
    let inp = document.getElementById('cala1-inp');
    let sp = document.getElementById('cala1-val-sp');
    let inp1 = document.getElementById('cala2-inp');
    let sp1 = document.getElementById('cala2-val-sp');
    if (!verify_values(parseFloat(inp.value), Ig)) {
        alert('Bulk Modulus value is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp1.value), h_star)) {
        alert('Compressibility value is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp.remove();
    sp.innerText = `${Ig.toFixed(2)}`;
    inp1.remove();
    sp1.innerText = `${h_star.toFixed(2)}`;
    alert('Your entered values are correct!!');
}
//# sourceMappingURL=activity2.js.map