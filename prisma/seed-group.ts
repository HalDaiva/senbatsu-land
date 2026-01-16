import { PrismaClient } from './generated/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });

async function main() {
    const akb48 = await prisma.group.create({
        data: {
            name: "AKB48",
            since: new Date("2005-12-05")
        }
    })

    const ske48 = await prisma.group.create({
        data: {
            name: "SKE48",
            since: new Date("2008-10-05")
        }
    })

    const nmb48 = await prisma.group.create({
        data: {
            name: "NMB48",
            since: new Date("2010-10-09")
        }
    })

    const hkt48 = await prisma.group.create({
        data: {
            name: "HKT48",
            since: new Date("2011-11-26")
        }
    })

    const ngt48 = await prisma.group.create({
        data: {
            name: "NGT48",
            since: new Date("2005-10-01")
        }
    })

    const stu48 = await prisma.group.create({
        data: {
            name: "STU48",
            since: new Date("2017-05-03")
        }
    })

    const nogizaka46 = await prisma.group.create({
        data: {
            name: "Nogizaka46",
            since: new Date("2012-08-12")
        }
    })

    const sakurazaka46 = await prisma.group.create({
        data: {
            name: "Sakurazaka46",
            since: new Date("2015-08-21")
        }
    })

    const hinatazaka46 = await prisma.group.create({
        data: {
            name: "Hinatazaka46",
            since: new Date("2015-11-30")
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })