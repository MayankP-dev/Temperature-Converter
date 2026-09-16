const cel_el = document.getElementById("celsius")
const fah_el = document.getElementById("fahrenheit")
const kel_el = document.getElementById("kelvin")

// console.log("js is linked");


function computeTemp(event){
    const curr_val =+ event.target.value;

    switch(event.target.name){
        case "celsius":
            kel_el.value = (curr_val + 273.15).toFixed(2);
            fah_el.value = (((curr_val)*(9/5))+32).toFixed(2);
            break;
        
        case "fahrenheit":
            cel_el.value = ((curr_val-32)*0.55).toFixed(2);
            kel_el.value = ((curr_val-32)*0.55 + 273.15).toFixed(2);
            break;
        
        case "kelvin":
            cel_el.value = (curr_val -273.15).toFixed(2);
            fah_el.value = ((curr_val-273.15)*1.8 +32).toFixed(2);
            break;
        
        default:
            break;

    }
}