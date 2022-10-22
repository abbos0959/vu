
class ApiFeatures {
  constructor(query, queryStr) {
     this.query = query;
     this.queryStr = queryStr;
  }

  search() {
     const abbos = this.queryStr.abbos
        ? {
             name: { $regex: this.queryStr.abbos },
             $options: "i",
          }
        : {};
     console.log(abbos);

     this.query = this.query.find({ ...abbos });
     return this;
  }

  filter() {
     const querCopy = { ...this.queryStr };
     const remove = ["abbos", "limit", "page"];
     remove.forEach((i) => delete querCopy[i]); 
     

     //advanced filter qilish
     let queryStr = JSON.stringify(querCopy);
     queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
     this.query = this.query.find(JSON.parse(queryStr));
     return this;
  }
  pagination(resultperpage) {
     const currentpage = this.queryStr.page || 1; //50-10

     const skip = resultperpage * (currentpage - 1);
     this.query = this.query.limit(resultperpage).skip(skip);
     return this;
  }
}

module.exports = ApiFeatures;