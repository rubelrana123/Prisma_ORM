

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



  async function main() {
  //   const result = await prisma.user.create({
  //       data : {
  //           name : "sohel Rana",
  //           email : "sogel.dev@gmail.com",
  //           profilePhoto : ".jpg"
  //       }
  //   })
  //    console.log(result)
  // }
  // const usersData = await  prisma.user.findMany({
  //   where : {
  //      name: 'RUbel Rana',
  //   }
  // });
  //   const usersData = await  prisma.user.findUniqueOrThrow({
  //   where : {
  //      id: 5,
  //   }
  // });
//   const updatedUser = await prisma.user.update({
//   where: { id: 1 },
//   data: { name: "MAsud Abedin", email: "MAsud@gmail.com" }
// });
// const result = await prisma.user.updateMany({
//   where: { id: { gt: 2 } },
//   data: { profilePhoto: "https://programing-hero.com/level2/default-image.png" }
// });
  // const updateProfilePhoto = await prisma.user.updateManyAndReturn({
  //   where: {
  //     id: {
  //       gt: 2
  //     }
  //   },
  //   data: {
  //     profilePhoto: "https://programing-hero.com/level2/default-image.png"
  //   }
  // })

  const users = await prisma.user.findMany({
  orderBy: { id: "desc" }
});
  console.log(users)
  }
  main();