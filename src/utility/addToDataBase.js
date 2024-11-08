const getStoreCartList = () => {
    
}

const addToStoreCartList = (id) => {
    const storedList = getStoreCartList();
    if(storedList.includes(id)){
        alert();
    }
    else{
        storedList.push(id);
    }
}