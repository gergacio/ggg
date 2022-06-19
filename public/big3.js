document.querySelector('.expose').addEventListener('click',showHouse);
function showHouse(){

    setTimeout(() => {
        document.querySelector('.prototypes').classList.remove('hide');
        document.querySelector('.expose').classList.add('hide');
    }, 500);
    setTimeout(() => {
        document.querySelector('.scopes').classList.remove('hide');
    },600);
    setTimeout(() => {
        document.querySelector('.types').classList.remove('hide');
    },700);
    setTimeout(() => {
        document.querySelector('.pillars').classList.remove('hide');
    },800);
    setTimeout(() => {
        document.querySelector('.javascript').classList.remove('hide');
    },900);
    setTimeout(() => {
        document.querySelector('.there').classList.remove('hide');
    },1000);
    setTimeout(() => {
        document.querySelector('.big').classList.remove('hide');
    },1100);
}


//big3
//types
document.querySelector('.stypeBtn').addEventListener('click', () => {
    document.querySelector('.primDiv').classList.remove('hide');
});
document.querySelector('.htypeBtn').addEventListener('click', () => {
    document.querySelector('.primDiv').classList.add('hide');
});
//scope
document.querySelector('.hscopeBtn').addEventListener('click', () => {
    document.querySelector('.scopeDiv').classList.add('hide');
});
document.querySelector('.sscopeBtn').addEventListener('click', () => {
    document.querySelector('.scopeDiv').classList.remove('hide');
});

//primitive
document.querySelector('.sprotoBtn').addEventListener('click', () => {
    document.querySelector('.prototypeDiv').classList.remove('hide');
});
document.querySelector('.hprotoBtn').addEventListener('click', () => {
    document.querySelector('.prototypeDiv').classList.add('hide');
});

//expose primitive type
document.querySelector('.primitiveType').addEventListener("mouseover",(e) => { 
    document.querySelector('.type-section').classList.remove("hide");
    document.querySelector('.type-section').classList.add("show");
});
document.querySelector('.primitiveType').addEventListener("mouseout",() => {   
    document.querySelector(".type-section").classList.remove("show");
    document.querySelector(".type-section").classList.add("hide");
});
//expose coercion
document.querySelector('.coersion').addEventListener("mouseover",(e) => { 
    document.querySelector('.coersion-section').classList.remove("hide");
    document.querySelector('.coersion-section').classList.add("show");
});
document.querySelector('.coersion').addEventListener("mouseout",() => {   
    document.querySelector(".coersion-section").classList.remove("show");
    document.querySelector(".coersion-section").classList.add("hide");
});
//expose equality
document.querySelector('.equalitty').addEventListener("mouseover",(e) => { 
    document.querySelector('.equalitty-section').classList.remove("hide");
    document.querySelector('.equalitty-section').classList.add("show");
});
document.querySelector('.equalitty').addEventListener("mouseout",() => {   
    document.querySelector(".equalitty-section").classList.remove("show");
    document.querySelector(".equalitty-section").classList.add("hide");
});
//expose scope
document.querySelector('.scope').addEventListener("mouseover",(e) => { 
    document.querySelector('.scope-section').classList.remove("hide");
    document.querySelector('.scope-section').classList.add("show");
});
document.querySelector('.scope').addEventListener("mouseout",() => {   
    document.querySelector(".scope-section").classList.remove("show");
    document.querySelector(".scope-section").classList.add("hide");
});
//expose closure
document.querySelector('.closure').addEventListener("mouseover",(e) => { 
    document.querySelector('.closure-section').classList.remove("hide");
    document.querySelector('.closure-section').classList.add("show");
});
document.querySelector('.closure').addEventListener("mouseout",() => {   
    document.querySelector(".closure-section").classList.remove("show");
    document.querySelector(".closure-section").classList.add("hide");
});
//expose this
document.querySelector('.thisS').addEventListener("mouseover",(e) => { 
    document.querySelector('.this-section').classList.remove("hide");
    document.querySelector('.this-section').classList.add("show");
});
document.querySelector('.thisS').addEventListener("mouseout",() => {   
    document.querySelector(".this-section").classList.remove("show");
    document.querySelector(".this-section").classList.add("hide");
});
//expose prototypes
document.querySelector('.prototypeS').addEventListener("mouseover",(e) => { 
    document.querySelector('.prototype-section').classList.remove("hide");
    document.querySelector('.prototype-section').classList.add("show");
});
document.querySelector('.prototypeS').addEventListener("mouseout",() => {   
    document.querySelector(".prototype-section").classList.remove("show");
    document.querySelector(".prototype-section").classList.add("hide");
});
















