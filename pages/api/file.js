import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false
  }
};
export default async function handler(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    const file = files.file
    const path = file.filepath
    const name = file.originalFilename;
    const data = fs.readFileSync(path);
    fs.writeFileSync(`./${name}`, data);
    
    return res.status(201).send("");
  });
};

// const saveFile = async (file) => {
//   const data = fs.readFileSync(file.path);
//   fs.writeFileSync(`./public/${file.name}`, data);
//   await fs.unlinkSync(file.path);
//   return;
// };

// eslint-disable-next-line import/no-anonymous-default-export
// export default (req, res) => {
//   req.method === "POST"
//     ? post(req, res)
//     : req.method === "PUT"
//     ? console.log("PUT")
//     : req.method === "DELETE"
//     ? console.log("DELETE")
//     : req.method === "GET"
//     ? console.log("GET")
//     : res.status(404).send("");
// };
