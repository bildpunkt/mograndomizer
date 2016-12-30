var mograndom = function() {
    document.getElementById("result").style.display = 'none';
    var times = document.getElementById("length").value;
    var repeat = document.getElementById("repeat").value;
    var result = [];

    for (var i = 1; i <= times; i++) {
        var tmp_mod = mods.sample();
        var tmp_val = tmp_mod.sample();
        
        if (repeat !== 0 || repeat !== undefined) {
            for (var r = 0; r <= repeat; r++) {
                result.push(tmp_val);
            }
        } else {
            result.push(tmp_val);
        }
    }
    
    if (result.length > 30) {
        var warn_result = result.slice(0,29);
        document.getElementById("lengthwarn-res").innerHTML = warn_result.join(" ");
        document.getElementById("lengthwarn").style.display = 'block';
    } else {
        document.getElementById("lengthwarn").style.display = 'none';
        document.getElementById("result-text").innerHTML = result.join(" ");
        document.getElementById("result").style.display = 'block';
    }
}

document.getElementById("mog").addEventListener("click", mograndom);