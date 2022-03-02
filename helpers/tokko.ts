export const operationTypes: any = {
  "venta": 1,
  "alquiler": 2
}

export const propertyTypes: any = {
  "terrenos": 1,
  "departamentos": 2,
  "casas": 3,
  "emprendimientos": 4,
  "oficinas": 5,
  "ph": 13,
  "locales": 7,
  "campos": 9,
  "cocheras": 10
}


export const parseTokkoParameters = (query: any) => {

  query["filters"] = []
  
  // operation_types
  if(query.opid){
    query["operation_types"] = [operationTypes[query.opid]]
    delete query.opid;
  }

  // property_types
  if(query.prid){
    query["operation_types"] = [propertyTypes[query.prid]]
    delete query.prid;
  }

  if(query.baths_from){
    query["filters"] = [...query["filters"], ["bathroom_amount", "<", (parseInt(query.baths_from) - 1)]]
    delete query.baths_from;
  }
  
  if(query.baths_to){
    query["filters"] = [...query["filters"], ["bathroom_amount", ">", (parseInt(query.baths_to) + 1)]]
    delete query.baths_to;
  }

  if(query.m2_from){
    query["filters"] = [...query["filters"], ["total_surface", "<", (parseInt(query.m2_from) - 1)]]
    delete query.m2_from;
  }
  
  if(query.m2_to){
    query["filters"] = [...query["filters"], ["total_surface", ">", (parseInt(query.m2_to) + 1)]]
    delete query.m2_to;
  }

  console.log(query)
  return query
}