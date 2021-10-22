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

        imgsrc: "http://sec.kerala.gov.in/images/symbols/7.jpg",
      },
      {
        title: "Bahujan Samaj Party",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/1.jpg",
      },
      {
        title: "Bharatiya Janata Party",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/2.jpg",
      },
      {
        title: "Communist Party of India",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/3.jpg",
      },

      {
        title: "Communist Party of India (Marxist)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/4.jpg",
      },
      {
        title: "Indian National Congress",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/5.jpg",
      },
      {
        title: "Nationalist Congress Party",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/6.jpg",
      },
      {
        title: "Indian Union Muslim League",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/11.jpg",
      },

      {
        title: "Janata Dal (Secular)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/12.jpg",
      },
      {
        title: "Kerala Congress (M)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/13.jpg",
      },
      {
        title: "Revolutionary Socialist Party",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/14.jpg",
      },
      {
        title: "Aam Aadmi Party (AAP)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/21.jpg",
      },

      {
        title: "All India Anna DMK (AIADMK)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/22.jpg",
      },
      {
        title: "All India Forward Bloc",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/23.jpg",
      },
      {
        title: "Communist Marxist Party Central Council (CP John faction)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718101403.png",
      },
      {
        title: "Communist Marxist Party (CMP)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/24.jpg",
      },
      {
        title:
          "Communist Marxist Party Kerala State Committee (Aravindakshan faction)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718101448.png",
      },

      {
        title: "Congress (Secular)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/25.jpg",
      },
      {
        title: "CPI (ML) Red Star",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718102100.png",
      },
      {
        title: "Indian National League (INL)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718120807.png",
      },
      {
        title: "Janadhipatya Samrakshana Samithi (JSS)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718042542.png",
      },

      {
        title: "Janadhipatya Samrakshna Samithi (Rajan Babu)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718102135.png",
      },
      {
        title: "Janata Dal (United)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718042650.png",
      },
      {
        title: "Kerala Congress",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718042950.png",
      },
      {
        title: "Kerala Congress (B)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718042738.png",
      },

      {
        title: "Kerala Congress (Jacob)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718042806.png",
      },
      {
        title: "Kerala Congress Secular",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718102207.png",
      },
      {
        title: "Lok Janshakthi Party",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043041.png",
      },
      {
        title: "Marxist Communist Party of India (United)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718102239.png",
      },

      {
        title: "National Secular Conference",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043148.png",
      },
      {
        title: "Peoples Democratic Party (PDP)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043318.png",
      },
      {
        title: "Rashtriya Janata Dal",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043345.png",
      },
      {
        title: "Rashtriya Lok Samta Part",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043411.png",
      },

      {
        title: "Revolutionary Socialist Party (Marxist)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718102311.png",
      },
      {
        title: "Samajwadi Party (SP)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043446.png",
      },
      {
        title: "Shiv Sena (SS)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg180718043247.png",
      },
      {
        title: "Social Democratic Party of India (SDPI)",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718101327.png",
      },
      {
        title: "Welfare Party of India",

        imgsrc: "http://sec.kerala.gov.in/images/symbols/gimg190718102348.png",
      },
    ],
  });
});
export default route;
