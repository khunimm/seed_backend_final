const express = require("express");
const cors = require("cors");
const serveIndex = require("serve-index");
//================================================================
const cookieSession = require("cookie-session");
//================================================================
const app = express();

//app.use
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
//================================================================
app.use(express.urlencoded({ extended: true }));

// app.use(
//   cookieSession({
//     name: "bezkoder-session",
//     secret: "COOKIE_SECRET", // should use as secret environment variable
//     httpOnly: true
//   })
// );

//path import
const registerCampRouter = require('./src/routes/registerCamp.route')
const campsRouter = require('./src/routes/camps.route')
const seedMembersRouter = require('./src/routes/seedmembers.route')
const seedActivitiesRouter = require('./src/routes/seedActivities.route')
const mediasRouter = require('./src/routes/medias.route')
const newsRouter = require('./src/routes/news.route')
const pointsRouter = require('./src/routes/points.route')
const uploadFileRouter = require('./src/routes/uploadFile.route')
const authRouter = require('./src/routes/auth.route')
const fileupload = require("express-fileupload")
const eventsRoute = require("./src/routes/events.route")
const regisEventsRoute = require("./src/routes/regis_events.route")
const responseEducationRoute = require("./src/routes/responseEducation.route")
const rewardRankRoute = require("./src/routes/rewardRank.route")



//path


app.use(fileupload({
    limits: { fileSized: 50* 1024 * 1024}
}
))

//================================================================
// routes
// require('./app/routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
//================================================================

app.use('/registerCamp', registerCampRouter.router);

app.use('/camps', campsRouter.router);

app.use('/seedmembers', seedMembersRouter.router);

app.use('/seedActivities', seedActivitiesRouter.router);

app.use('/medias', mediasRouter.router);

app.use('/news', newsRouter.router);

app.use('/points', pointsRouter.router);

app.use('/uploadFile', uploadFileRouter.router);

app.use('/auth', authRouter.router);

app.use('/events', eventsRoute.router);

app.use('/regisEvents', regisEventsRoute.router);

app.use('/responseEducation', responseEducationRoute.router);

app.use('/rewardRank', rewardRankRoute.router);

// app.use('/public',express.static('src/public'))
// app.use('/public',serveIndex('src/public'))

app.use('/public',express.static('src/public'))
app.use('/public',serveIndex('src/public'))

//================================================================
// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }
//================================================================

//================================================================
// require('./routes/auth.routes')(app);
// require('./app/routes/user.routes')(app);
//================================================================

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });

app.get("/", (req, res) => {
  res.send("Successful response.");
});

app.use((_req, res) => {
  res.sendStatus(501);
});

app.listen(3000, () =>{
  console.log("sever run on port " + 3000);
});

























// app.get('/playerInfo', async (req, res) => {
//   info =  await player.findAll();
//   res.json(info);
// });

// app.get('/playerInfo/:id', async (req, res) => {
//   id =  req.params.id;
//   info =  await player.findOne({
//     //attributes: ['name', ['tid','team'] , 'age'], สามารถเลือกเฉพาะ attributes ที่ต้องการได้ และ ['tid','team'] เขียนเป็น sql ก็จะได้ แบบนี้ครับ tid AS team
//     where: { pid: id }
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.json(info);
//   }

// });

// app.post('/playerInfo', async (req, res) => {
//   data  =  req.body.data;
//   info =  await player.create({
//     name: data.name,
//     age: data.age,
//     position: data.position,
//     tid: data.tid,
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.status(200).json(info);
//   }
// });

// app.put('/playerInfo/:id', async (req, res) => {
//   id =  req.params.id;
//   info =  await player.update({ position: 'ST' },{
//     where: { pid: id }
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.sendStatus(200);
//   }
// });

// app.delete('/playerInfo/:id', async (req, res) => {
//   id =  req.params.id;
//   info =  await player.destroy({
//     where: { pid: id }
//   });
//   if(!info){
//     res.sendStatus(500);
//   }else{
//     res.sendStatus(200);
//   }
// });