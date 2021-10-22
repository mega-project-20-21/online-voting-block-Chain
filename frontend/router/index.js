import { Router } from "express";
// var hash = require("pbkdf2-password")();
import { User } from "../database/user.js";
import bcrypt from "bcrypt";
const route = Router();

route.get("/", (req, res) => {
  res.render("index");
});
route.post("/", (req, res) => {
  const { userid, password } = req.body;
  User.findOne({ userid }, (e, r) => {
    if (e) throw e;
    if (r) {
      if (bcrypt.compareSync(password, r.password)) {
        res.status(500);
      }
    }
    res.status(200).json(r);
  });
});
route.get("/signup", (req, res) => {
  res.render("singup");
});
route.post("/sigup", (req, res) => {
  const { userid, password } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  const data = new User({
    userid,
    password: hash,
  });
  data.save((err, result) => {
    if (err) throw err;

    if (result) {
      result.password = undefined;
      result.__v = undefined;
      res.send(result);
    }
  });
});
route.get("/howtovote", (req, res) => {
  res.render("howtovote");
});
route.get("/sucessfullyvoted", (req, res) => {
  res.render("successfullyvoted");
});
route.get("/candidateview", (req, res) => {
  res.render("candidateview", {
    cndide1: [
      {
        title: "All India Trinamool Congress",

        imgsrc: "images/7.jpg",
      },
      {
        title: "Bahujan Samaj Party",

        imgsrc: "images/1.jpg",
      },
      {
        title: "Bharatiya Janata Party",

        imgsrc: "images/2.jpg",
      },
      {
        title: "Communist Party of India",

        imgsrc: "images/3.jpg",
      },

      {
        title: "Communist Party of India (Marxist)",

        imgsrc: "images/4.jpg",
      },
      {
        title: "Indian National Congress",

        imgsrc: "images/5.jpg",
      },
      {
        title: "Nationalist Congress Party",

        imgsrc: "images/6.jpg",
      },
      {
        title: "Indian Union Muslim League",

        imgsrc: "images/11.jpg",
      },

      {
        title: "Janata Dal (Secular)",

        imgsrc: "images/12.jpg",
      },
      {
        title: "Kerala Congress (M)",

        imgsrc: "images/13.jpg",
      },
      {
        title: "Revolutionary Socialist Party",

        imgsrc: "images/14.jpg",
      },
      {
        title: "Aam Aadmi Party (AAP)",

        imgsrc: "images/21.jpg",
      },

      {
        title: "All India Anna DMK (AIADMK)",

        imgsrc: "images/22.jpg",
      },
      {
        title: "All India Forward Bloc",

        imgsrc: "images/23.jpg",
      },
      {
        title: "Communist Marxist Party Central Council (CP John faction)",

        imgsrc: "images/gimg190718101403.png",
      },
      {
        title: "Communist Marxist Party (CMP)",

        imgsrc: "images/24.jpg",
      },
      {
        title:
          "Communist Marxist Party Kerala State Committee (Aravindakshan faction)",

        imgsrc: "images/gimg190718101448.png",
      },

      {
        title: "Congress (Secular)",

        imgsrc: "images/25.jpg",
      },
      {
        title: "CPI (ML) Red Star",

        imgsrc: "images/gimg190718102100.png",
      },
      {
        title: "Indian National League (INL)",

        imgsrc: "images/gimg180718120807.png",
      },
      {
        title: "Janadhipatya Samrakshana Samithi (JSS)",

        imgsrc: "images/gimg180718042542.png",
      },

      {
        title: "Janadhipatya Samrakshna Samithi (Rajan Babu)",

        imgsrc: "images/gimg190718102135.png",
      },
      {
        title: "Janata Dal (United)",

        imgsrc: "images/gimg180718042650.png",
      },
      {
        title: "Kerala Congress",

        imgsrc: "images/gimg180718042950.png",
      },
      {
        title: "Kerala Congress (B)",

        imgsrc: "images/gimg180718042738.png",
      },

      {
        title: "Kerala Congress (Jacob)",

        imgsrc: "images/gimg180718042806.png",
      },
      {
        title: "Kerala Congress Secular",

        imgsrc: "images/gimg190718102207.png",
      },
      {
        title: "Lok Janshakthi Party",

        imgsrc: "images/gimg180718043041.png",
      },
      {
        title: "Marxist Communist Party of India (United)",

        imgsrc: "images/gimg190718102239.png",
      },

      {
        title: "National Secular Conference",

        imgsrc: "images/gimg180718043148.png",
      },
      {
        title: "Peoples Democratic Party (PDP)",

        imgsrc: "images/gimg180718043318.png",
      },
      {
        title: "Rashtriya Janata Dal",

        imgsrc: "images/gimg180718043345.png",
      },
      {
        title: "Rashtriya Lok Samta Part",

        imgsrc: "images/gimg180718043411.png",
      },

      {
        title: "Revolutionary Socialist Party (Marxist)",

        imgsrc: "images/gimg190718102311.png",
      },
      {
        title: "Samajwadi Party (SP)",

        imgsrc: "images/gimg180718043446.png",
      },
      {
        title: "Shiv Sena (SS)",

        imgsrc: "images/gimg180718043247.png",
      },
      {
        title: "Social Democratic Party of India (SDPI)",

        imgsrc: "images/gimg190718101327.png",
      },
      {
        title: "Welfare Party of India",

        imgsrc: "images/gimg190718102348.png",
      },
    ],
  });
});
route.get("/result", (req, res) => {
  res.render("Result", {
    cndide1: [
      {
        title: "All India Trinamool Congress",

        imgsrc: "images/7.jpg",
      },
      {
        title: "Bahujan Samaj Party",

        imgsrc: "images/1.jpg",
      },
      {
        title: "Bharatiya Janata Party",

        imgsrc: "images/2.jpg",
      },
      {
        title: "Communist Party of India",

        imgsrc: "images/3.jpg",
      },

      {
        title: "Communist Party of India (Marxist)",

        imgsrc: "images/4.jpg",
      },
      {
        title: "Indian National Congress",

        imgsrc: "images/5.jpg",
      },
      {
        title: "Nationalist Congress Party",

        imgsrc: "images/6.jpg",
      },
      {
        title: "Indian Union Muslim League",

        imgsrc: "images/11.jpg",
      },

      {
        title: "Janata Dal (Secular)",

        imgsrc: "images/12.jpg",
      },
      {
        title: "Kerala Congress (M)",

        imgsrc: "images/13.jpg",
      },
      {
        title: "Revolutionary Socialist Party",

        imgsrc: "images/14.jpg",
      },
      {
        title: "Aam Aadmi Party (AAP)",

        imgsrc: "images/21.jpg",
      },

      {
        title: "All India Anna DMK (AIADMK)",

        imgsrc: "images/22.jpg",
      },
      {
        title: "All India Forward Bloc",

        imgsrc: "images/23.jpg",
      },
      {
        title: "Communist Marxist Party Central Council (CP John faction)",

        imgsrc: "images/gimg190718101403.png",
      },
      {
        title: "Communist Marxist Party (CMP)",

        imgsrc: "images/24.jpg",
      },
      {
        title:
          "Communist Marxist Party Kerala State Committee (Aravindakshan faction)",

        imgsrc: "images/gimg190718101448.png",
      },

      {
        title: "Congress (Secular)",

        imgsrc: "images/25.jpg",
      },
      {
        title: "CPI (ML) Red Star",

        imgsrc: "images/gimg190718102100.png",
      },
      {
        title: "Indian National League (INL)",

        imgsrc: "images/gimg180718120807.png",
      },
      {
        title: "Janadhipatya Samrakshana Samithi (JSS)",

        imgsrc: "images/gimg180718042542.png",
      },

      {
        title: "Janadhipatya Samrakshna Samithi (Rajan Babu)",

        imgsrc: "images/gimg190718102135.png",
      },
      {
        title: "Janata Dal (United)",

        imgsrc: "images/gimg180718042650.png",
      },
      {
        title: "Kerala Congress",

        imgsrc: "images/gimg180718042950.png",
      },
      {
        title: "Kerala Congress (B)",

        imgsrc: "images/gimg180718042738.png",
      },

      {
        title: "Kerala Congress (Jacob)",

        imgsrc: "images/gimg180718042806.png",
      },
      {
        title: "Kerala Congress Secular",

        imgsrc: "images/gimg190718102207.png",
      },
      {
        title: "Lok Janshakthi Party",

        imgsrc: "images/gimg180718043041.png",
      },
      {
        title: "Marxist Communist Party of India (United)",

        imgsrc: "images/gimg190718102239.png",
      },

      {
        title: "National Secular Conference",

        imgsrc: "images/gimg180718043148.png",
      },
      {
        title: "Peoples Democratic Party (PDP)",

        imgsrc: "images/gimg180718043318.png",
      },
      {
        title: "Rashtriya Janata Dal",

        imgsrc: "images/gimg180718043345.png",
      },
      {
        title: "Rashtriya Lok Samta Part",

        imgsrc: "images/gimg180718043411.png",
      },

      {
        title: "Revolutionary Socialist Party (Marxist)",

        imgsrc: "images/gimg190718102311.png",
      },
      {
        title: "Samajwadi Party (SP)",

        imgsrc: "images/gimg180718043446.png",
      },
      {
        title: "Shiv Sena (SS)",

        imgsrc: "images/gimg180718043247.png",
      },
      {
        title: "Social Democratic Party of India (SDPI)",

        imgsrc: "images/gimg190718101327.png",
      },
      {
        title: "Welfare Party of India",

        imgsrc: "images/gimg190718102348.png",
      },
    ],
  });
});
export default route;
