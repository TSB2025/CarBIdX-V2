
export const API = {
  base: "https://cbx2-backend.onrender.com/api/v1",
  async post(path,data){
    const r = await fetch(this.base + path,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data)
    });
    return r.json();
  }
};
