export interface Employee {
  id : number,	
  firstname:string,	
  lastname:string,	
  email:string,
  gender:string,	
  jobtitle:string,
  department:string,
  project: Project
}

export interface Project{
  name:string,
  id:number
}
