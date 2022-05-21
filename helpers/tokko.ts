import { getKeyByValue } from "helpers"
import { neighborhoods } from "./neighborhoods"

export const propertiesSelectOptions = [
  {value: 0, label: "Todos"},
  {value: 1, label: "Terrenos"},
  {value: 2, label: "Departamentos"},
  {value: 3, label: "Casas"},
  {value: 4, label: "Emprendimientos"},
  {value: 5, label: "Oficinas"},
  {value: 13, label: "PH"},
  {value: 7, label: "Locales"},
  {value: 9, label: "Campos"},
  {value: 10, label: "Cocheras"},
]

export const operationTypes: any = {
  "venta": 1,
  "alquiler": 2
}

export const propertyTypes: any = {
  "todos": 0,
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

  // Locations
  if(query.locid){
    const locations = query.locid.map((item: string) => neighborhoods.find(loc => item.toLowerCase().replace('-', '') === loc.location_name.toLowerCase().replace(' ', '')))
    if(locations) query['current_localization_id'] = locations.map((item: any) => item.location_id);
    delete query.locid;
  }
  
  // operation_types
  if(query.opid){
    query["operation_types"] = [operationTypes[query.opid]]
    delete query.opid;
  }

  // property_types
  if(query.prid && query.prid !== "todos"){
    query["property_types"] = [propertyTypes[query.prid]]
    delete query.prid;
  }

  if(query.baths_from){
    query["filters"] = [...query["filters"], ["bathroom_amount", ">", (parseInt(query.baths_from) - 1)]]
    delete query.baths_from;
  }
  
  if(query.baths_to){
    query["filters"] = [...query["filters"], ["bathroom_amount", "<", (parseInt(query.baths_to) + 1)]]
    delete query.baths_to;
  }

  if(query.m2_from){
    query["filters"] = [...query["filters"], ["total_surface", ">", (parseInt(query.m2_from) - 1)]]
    delete query.m2_from;
  }
  
  if(query.m2_to){
    query["filters"] = [...query["filters"], ["total_surface", "<", (parseInt(query.m2_to) + 1)]]
    delete query.m2_to;
  }

  if(query.rooms_from){
    query["filters"] = [...query["filters"], ["suite_amount", ">", (parseInt(query.rooms_from) - 1)]]
    delete query.rooms_from;
  }
  
  if(query.rooms_to){
    query["filters"] = [...query["filters"], ["suite_amount", "<", (parseInt(query.rooms_to) + 1)]]
    delete query.rooms_to;
  }
  

  // Pagination
  const page = parseInt(query.page);
  if(page && page > 0){
    query.offset = (page - 1) * 26;
  }

  return query
}

export const getSearchUrl = (params: any) => {
  let url = `/${getKeyByValue(operationTypes, params.operation_type)}`;

  if(params.property_type || params.property_type === 0) url = url + `/${getKeyByValue(propertyTypes, params.property_type)}`

  if(params.locations){
    params.locations.map((item: number) => {
      url = url + `/${neighborhoods.find(loc => item === loc.location_id)?.location_name.toLowerCase().replace('-', '')}`
    })
  }

  const query: any = {}

  if(params.price_from && params.price_from > 0) query['price_from'] = params.price_from;
  if(params.price_to && params.price_to > 0 && params.price_to < 3000001) query['price_to'] = params.price_to;
  if(params.min_rooms && params.min_rooms > 0) query['rooms_from'] = params.min_rooms;
  if(params.max_rooms && params.max_rooms > 0) query['rooms_to'] = params.max_rooms;

  if(Object.keys(query).length > 0) url = url + '?' + Object.keys(query).map(item => `${item}=${query[item]}`).join('&');


  return url;
}