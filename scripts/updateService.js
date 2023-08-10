export const updateService = async (URL, service)=>{
    try{
        const RESPONSE = await axios.put(`${URL}${service.id}`,{
            ...service
        });
        return RESPONSE;
    }catch(error){
        console.error('Error, updating service: ',error);
        alert('Hubo un error al actualizar el producto. Por favor, inténtalo de nuevo.');
    }
}


