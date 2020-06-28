"use strict";

const connectDb = require("./db");
const { ObjectID } = require("mongodb");

module.export = {
  getCourses: async () => {
    let db;
    let courses = [];
    try {
      db = await connectDb();
      courses = await db.collection("courses").find().toArray();
    } catch (error) {
      console.log("Error en resolvers " + error);
    }
    return courses;
  },
  getCourse: async (root, { id }) => {
    let db;
    let course;
    try {
      db = await connectDb();
      course = await db.collection("courses").findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.log("Error en resolvers " + error);
    }
    return course;
  },
  getStudent: async () => {
    let db;
    let students = [];
    try {
      db = await connectDb();
      students = await db.collection("students").find().toArray();
    } catch (error) {
      console.log("Error en resolvers " + error);
    }
    return students;
  },
  getStudent: async (root, { id }) => {
    let db;
    let student;
    try {
      db = await connectDb();
      student = await db.collection("students").findOne({ _id: ObjectID(id) });
    } catch (error) {
      console.log("Error en resolvers " + error);
    }
    return student;
  },
};
