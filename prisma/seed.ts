import { PrismaClient } from './generated/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});
const prisma = new PrismaClient({ adapter });

async function main() {

    // await prisma.showType.create({
    //     data: {
    //         name: "Variety Show",
    //         japaneseName: "バラエティー番組",
    //         slug: "variety-show",
    //     }
    // })

    // await prisma.show.create({
    //     data: {
    //         slug: "akbingo",
    //         title: "AKBINGO!",
    //         type: {
    //             connect: {
    //                 slug: "variety-show"
    //             }
    //         },
    //         groups: {connect: [{ id: 2 }] },
    //         startDate: new Date("2008-10-02"),
    //         endDate: new Date("2019-09-24"),
    //         description: "AKBINGO! was AKB48's weekly variety show, and the longest running of its kind. It was originally named AKB 1ji 59fun!, then AKB 0ji 59fun! when its time slot was moved up an hour, until finally arriving at AKBINGO!. AKBINGO! featured AKB48 members and sometimes sister group members participating in a variety of talks, games, and activities. Games often had a twist or comedic punishment for losing, leading to amusing situations. (Stage48)",
    //         coverUrl: "https://m.media-amazon.com/images/S/pv-target-images/5cc11625956c457ba7baff52440fee11af2e9fb9b207277133fd5786e704ff56.jpg",
    //     }
    // })

    // await prisma.show.create({
    //     data: {
    //         slug: "sashi-kita-gassen",
    //         title: "HKT48 vs NGT48 Sashi Kita Gassen",
    //         type: {
    //             connect: {
    //                 slug: "variety-show"
    //             }
    //         },
    //         groups: {connect: [{ id: 5 }, { id: 6}] },
    //         startDate: new Date("2016-01-12"),
    //         endDate: new Date("2016-03-29"),
    //         description: "A variety TV show featuring members from HKT48 and NGT48. The show started run on January 4, 2016 and ended on March 29, 2016. It aired Mondays on NTV at 25:29 JST for half an hour. This show features members of both groups participating head-to-head in contests, pranks, physical prowess challenges, or idol appeal battles to try and reel in a victory for their group. It is hosted by Sashihara Rino, with Kitahara Rie as co-host. (Stage48)",
    //         coverUrl: "https://images.prod.hjholdings.tv/d3urerHm/uploads/migration/50024863_series_art__768x2048_hkt48_vs_ngt48_sashikitagassen_081c701e4f5d680b1fb3dc3b628f6deb.jpg?w=1600&h=600&p=t",
    //     }
    // })

    // await prisma.season.create({
    //     data: {
    //         name: "2008",
    //         show: { connect: { slug: "akbingo" } },
    //     }
    // })

    // const seasons = [
    //     "2009",
    //     "2010",
    //     "2011",
    //     "2012",
    //     "2013",
    //     "2014",
    //     "2015",
    //     "2016",
    //     "2017",
    //     "2018",
    //     "2019"
    // ]
    //
    // for (const season of seasons) {
    //     await prisma.season.create({
    //         data: {
    //             name: season,
    //             slug: season,
    //             show: { connect: { slug: "akbingo" } },
    //         }
    //     })
    // }

    // for (let i = 13; i < 24; i++) {
    //     await prisma.season.delete({ where: { id: i } })
    // }

    // await prisma.host.create({
    //     data: {
    //         name: "Odnoklassniki",
    //     }
    // })

    // await prisma.show.update({
    //     where: { slug: "akbingo" },
    //     data: {
    //         groups: {
    //             connect: [{ id: 2 }]
    //         }
    //     }
    // })

    // await prisma.group.update({
    //     where: { id: 2 },
    //     data: {
    //         slug: "akb48",
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 3 },
    //     data: {
    //         slug: "ske48",
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 4 },
    //     data: {
    //         slug: "nmb48",
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 5 },
    //     data: {
    //         slug: "hkt48",
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 6 },
    //     data: {
    //         slug: "ngt48",
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 7 },
    //     data: {
    //         slug: "stu48",
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 8 },
    //     data: {
    //         slug: "nogizaka46",
    //         nativeName: "乃木坂４６"
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 9 },
    //     data: {
    //         slug: "sakurazaka46",
    //         nativeName: "櫻坂４６"
    //     }
    // })
    // await prisma.group.update({
    //     where: { id: 10 },
    //     data: {
    //         slug: "hinatazaka46",
    //         nativeName: "日向坂４６"
    //     }
    // })

    // await prisma.season.update({
    //     where: { id: 1 },
    //     data: {
    //         slug: "2008",
    //     }
    // })

    // await prisma.video.create({
    //     data: {
    //         host: { connect: { id: 1 } },
    //         idFromHost: "9759488281332",
    //         slug: "akbingo-1",
    //         releaseDate: new Date("2008-10-01"),
    //         groups: { connect: [{ id: 2 }] },
    //         seasons: { connect: { id: 1 } },
    //         episode: 1,
    //         title: "[Ep 1] AKBINGO! - AKpedia, Ohori's Road to Solo Debut",
    //         subtitler: "AKB-48.com",
    //         thumbnailUrl: "https://i.okcdn.ru/videoPreview?id=8125447015156&type=37&idx=7&tkn=H03qdeZ_MeNJd-nBidLrACUy2SU&fn=external_8",
    //         tags: ["AKB48",  "Variety Show"],
    //     }
    // })

    // const videos = [
    //     {
    //         external_id: "9759488477940",
    //         release_date: "2008-10-08",
    //         episode: 2,
    //         title: "[Ep 2] AKBINGO! - Find the Real Thing, Ohori's Road to Solo Debut",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8125466020596&type=37&idx=6&tkn=R6kIyoXvcZ-OsV_XTFbB5-Zs1cs&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9759488412404",
    //         release_date: "2008-10-15",
    //         episode: 3,
    //         title: "[Ep 3] AKBINGO! - Find the Real Thing",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8125490137844&type=37&idx=14&tkn=Ud3EyJiTKsIrT2cM78tF5Rw7_8I&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9759488346868",
    //         release_date: "2008-10-22",
    //         episode: 4,
    //         title: "[Ep 4] AKBINGO! - Fast Word Battle, Ohori's Road to Solo Debut",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8125515631348&type=37&idx=8&tkn=s4rsTDkIxfXO2AtiUJySymOqrSw&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9759488805620",
    //         release_date: "2008-10-29",
    //         episode: 5,
    //         title: "[Ep 5] AKBINGO! - Reunite Kiyoto with Mother, Find the Real Thing, Ohori's Road to Solo Debut",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8125539093236&type=37&idx=15&tkn=DzR0VkJjLcni2C-AdXUkAG2UY5I&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9774048479988",
    //         release_date: "2008-11-05",
    //         episode: 6,
    //         title: "[Ep 6] AKBINGO! - Fast Word Battle, Ohori's Road to Solo Debut",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8144251128564&type=37&idx=2&tkn=MWVi6vgxFE2s_S41ZRraZL2cvpY&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9774091471604",
    //         release_date: "2008-11-12",
    //         episode: 7,
    //         title: "[Ep 7] AKBINGO! - Find the Real Thing, Ohori's Road to Solo Debut",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8144336587508&type=37&idx=2&tkn=pY_UPltBzh1cL-J2cGs_ef62lhM&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9774091340532",
    //         release_date: "2008-11-19",
    //         episode: 8,
    //         title: "[Ep 8] AKBINGO! - Fast Word Battle, Ohori's Road to Solo Debut",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8144299297524&type=37&idx=3&tkn=I5Cd5bKwlp40mbECuy3VmmNowh8&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9774091537140",
    //         release_date: "2008-11-26",
    //         episode: 9,
    //         title: "[Ep 9] AKBINGO! - Ohori's Road to Solo Debut: Results Announcment",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8144375909108&type=37&idx=3&tkn=_k-HjTZHcaEqWQ1FVZbMuPxxkns&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    //     {
    //         external_id: "9774091602676",
    //         release_date: "2008-12-03",
    //         episode: 10,
    //         title: "[Ep 10] AKBINGO! - Missing48, Fast Word Battle",
    //         thumbnail: "https://i.okcdn.ru/videoPreview?id=8144412805876&type=37&idx=2&tkn=gb2T0uKLQJJmaWn8S--AMhZ39X4&fn=external_8",
    //         tags: ["AKB48", "Variety Show"],
    //     },
    // ]

    // const videosSeason2 = [
    //     {
    //         "external_id": "9781035338484",
    //         "release_date": "2009-01-01",
    //         "episode": 14,
    //         "title": "[Ep 14] AKBINGO! - New Year Dokkiri: 2009",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152451189492&type=37&idx=3&tkn=wuT1ldkdQQ73UWsa-pyIIwgTMSc&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781034879732",
    //         "release_date": "2009-01-08",
    //         "episode": 15,
    //         "title": "[Ep 15] AKBINGO! - Idoling!!! 0ji29fun, Missing48 vs Idoling!!!",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152446405364&type=37&idx=2&tkn=l9XKxD7AvjSXOA08szz_bIic7I4&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781034945268",
    //         "release_date": "2009-01-15",
    //         "episode": 16,
    //         "title": "[Ep 16] AKBINGO! - Missing48 vs Idoling!!!",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152447453940&type=37&idx=6&tkn=atXcgvbCthYSk04NcyiuwRb6oP4&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781035404020",
    //         "release_date": "2009-01-22",
    //         "episode": 17,
    //         "title": "[Ep 17] AKBINGO! - Clueless Girls Top 7, Maeda Atsuko Thanks Fans",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152452106996&type=37&idx=9&tkn=0-5poByy1mmUOv_uItDv14p2D_U&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781035207412",
    //         "release_date": "2009-01-29",
    //         "episode": 18,
    //         "title": "[Ep 18] AKBINGO! - Clueless Girls Top 7, Maeda Atsuko Thanks Fans",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152450206452&type=37&idx=2&tkn=eJnJsRRIbvykSA3x6QNUVpZg0aw&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781035076340",
    //         "release_date": "2009-02-05",
    //         "episode": 19,
    //         "title": "[Ep 19] AKBINGO! - New Fast Word Battle, Member's Graduation Photos",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152448436980&type=37&idx=12&tkn=z2a4TKz0Pi2xCff7CXmmqfg_OU0&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781035141876",
    //         "release_date": "2009-02-12",
    //         "episode": 20,
    //         "title": "[Ep 20] AKBINGO! - Clueless Girls Top 5",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152449420020&type=37&idx=12&tkn=7HgJpgkttq8591Ib86FiVfH0ZNY&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780993723124",
    //         "release_date": "2009-02-19",
    //         "episode": 21,
    //         "title": "[Ep 21] AKBINGO! - Fast Word Battle, Unreleased New Year Dokkiri Footage",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152398105332&type=37&idx=4&tkn=2zrPDdYNaxYpnlcg-pR14gV2adk&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780993657588",
    //         "release_date": "2009-02-26",
    //         "episode": 22,
    //         "title": "[Ep 22] AKBINGO! - Fast Word Battle, Tasteless Itano Tomomi",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152395746036&type=37&idx=1&tkn=gvRXxa50TtvQECz-YOWf2vEiRic&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780993854196",
    //         "release_date": "2009-03-05",
    //         "episode": 23,
    //         "title": "[Ep 23] AKBINGO! - Clueless Girls Top 5, Takahashi Minami Best Friend Reunited",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152401840884&type=37&idx=0&tkn=XyEjnSDaG2Wdd7tcWSH-YjX_5P0&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780993788660",
    //         "release_date": "2009-03-12",
    //         "episode": 24,
    //         "title": "[Ep 24] AKBINGO! - No.1 Member is Who? AKVegas",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152399743732&type=37&idx=4&tkn=ZsMCVUS6c_aj9BQ7AHN6893vUsk&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780993919732",
    //         "release_date": "2009-03-19",
    //         "episode": 25,
    //         "title": "[Ep 25] AKBINGO! - AKB48 Surprise Graduating Students",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152403610356&type=37&idx=1&tkn=dn9vL5IJI06ISX3Gc1pHRcmKBKc&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780994181876",
    //         "release_date": "2009-03-26",
    //         "episode": 26,
    //         "title": "[Ep 26] AKBINGO! - AKB48 Hypnotism",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152410688244&type=37&idx=11&tkn=-dBlhfVdQxCLnTFL26JqywRuB5w&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780993985268",
    //         "release_date": "2009-04-01",
    //         "episode": 27,
    //         "title": "[Ep 27] AKBINGO! - No.1 Member is Who? AKVegas",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152405510900&type=37&idx=8&tkn=6zyn06DmUjK9uKp8xT9ydUk_rz4&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780994050804",
    //         "release_date": "2009-04-08",
    //         "episode": 28,
    //         "title": "[Ep 28] AKBINGO! - No.1 Member is Who? AKVegas",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152408001268&type=37&idx=12&tkn=B-w-vBePMfjGFpC6WyBtoArMpU4&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780994116340",
    //         "release_date": "2009-04-15",
    //         "episode": 29,
    //         "title": "[Ep 29] AKBINGO! - AKB48 No.1 Fan",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152409180916&type=37&idx=13&tkn=kzM1bKRQAPAOSaKXSwlUweuB9dk&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9780994247412",
    //         "release_date": "2009-04-22",
    //         "episode": 30,
    //         "title": "[Ep 30] AKBINGO! - AKVegas, Oshima Mai Graduating Messages, Graduation Marathon",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152413113076&type=37&idx=13&tkn=01Pjipgezw4-oTWsl2HUX4MnPag&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781002636020",
    //         "release_date": "2009-04-29",
    //         "episode": 31,
    //         "title": "[Ep 31] AKBINGO! - Shoujiki Shougi, Attack Fuji TV",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152415537908&type=37&idx=1&tkn=NUPtAvPHw2SnMBx9bCj5PaWPWqo&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781002701556",
    //         "release_date": "2009-05-06",
    //         "episode": 32,
    //         "title": "[Ep 32] AKBINGO! - 2009 Lucky Girl Ranking, Oshima Mai's Graduation Marathon",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152417438452&type=37&idx=8&tkn=-HD8EgBCE1ioDTFbwPwL2j3hpFw&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781002636020",
    //         "release_date": "2009-05-13",
    //         "episode": 33,
    //         "title": "[Ep 33] AKBINGO! - Shoujiki Shougi, Oshima Mai's Graduation Marathon, Phrase Museum",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152415537908&type=37&idx=1&tkn=NUPtAvPHw2SnMBx9bCj5PaWPWqo&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781002898164",
    //         "release_date": "2009-05-20",
    //         "episode": 34,
    //         "title": "[Ep 34] AKBINGO! - Oshima Mai's Graduation Marathon",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152419863284&type=37&idx=7&tkn=g7vI3_6bRlp_UYNMW9CGoj477KQ&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781003291380",
    //         "release_date": "2009-05-27",
    //         "episode": 35,
    //         "title": "[Ep 35] AKBINGO! - Shoujiki Shougi, The AKBEST10, Phrase Museum",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152426941172&type=37&idx=8&tkn=VDpDQ6b_bNyHSVo4Ra0Ihrrm0wo&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781002963700",
    //         "release_date": "2009-06-03",
    //         "episode": 36,
    //         "title": "[Ep 36] AKBINGO! - Cooking Stadium",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152420977396&type=37&idx=14&tkn=mcYcSABlZ_pg_C-Hxgz4z1GkLsM&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781003160308",
    //         "release_date": "2009-06-10",
    //         "episode": 37,
    //         "title": "[Ep 37] AKBINGO! - Team A vs Team K Jump Rope Battle, The AKBEST10",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152424975092&type=37&idx=10&tkn=MECHNIlGDaQX3GJ7FyiZ8TwqvoM&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781003029236",
    //         "release_date": "2009-06-17",
    //         "episode": 38,
    //         "title": "[Ep 38] AKBINGO! - Cooking Stadium",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152422746868&type=37&idx=2&tkn=n4MVHv2HONDmZOsS3Y8kQ02oIS0&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781003094772",
    //         "release_date": "2009-06-24",
    //         "episode": 39,
    //         "title": "[Ep 39] AKBINGO! - AKB48 2009 Summer Clothes Collection",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152423205620&type=37&idx=9&tkn=bXHJiNVQ-vQOrsnle7UbO9x-8IM&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781003225844",
    //         "release_date": "2009-07-01",
    //         "episode": 40,
    //         "title": "[Ep 40] AKBINGO! - AKB48 French Lessons, The AKBEST10",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152425695988&type=37&idx=11&tkn=LyCxsNOF74e5SVYmBt-j6s6usXw&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781011679988",
    //         "release_date": "2009-07-08",
    //         "episode": 41,
    //         "title": "[Ep 41] AKBINGO! - School Students 'Namida Surprise', Phrase Museum",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152428251892&type=37&idx=3&tkn=N_FN7a1qsUzA_dRTDfzwQg6-wLQ&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781011745524",
    //         "release_date": "2009-07-15",
    //         "episode": 42,
    //         "title": "[Ep 42] AKBINGO! - AKB48 2009 Summer Clothes Collection",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152429234932&type=37&idx=10&tkn=hJyzkxGQdPKn2eYTpr3iRIQCwys&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781011811060",
    //         "release_date": "2009-07-22",
    //         "episode": 43,
    //         "title": "[Ep 43] AKBINGO! - AKB48 French Lessons, Phrase Museum",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152429562612&type=37&idx=10&tkn=tTp45yUHKqnrWGRZvjoqg9TW6OU&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781012269812",
    //         "release_date": "2009-07-29",
    //         "episode": 44,
    //         "title": "[Ep 44] AKBINGO! - Shoujiki Shougi",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152435329780&type=37&idx=11&tkn=rFletvTyTKrQbNZ2YA519PO7x4A&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781011942132",
    //         "release_date": "2009-08-05",
    //         "episode": 45,
    //         "title": "[Ep 45] AKBINGO! - AKB48 French Lessons, The AKBEST10",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152430938868&type=37&idx=12&tkn=XMzHfbR9HJUf1GVUrikF3SzGeHY&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781012204276",
    //         "release_date": "2009-08-12",
    //         "episode": 46,
    //         "title": "[Ep 46] AKBINGO! - Shoujiki Shougi, Phrase Museum, Kuramochi meets Kobashi Kenta",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152434346740&type=37&idx=5&tkn=tC4u6vEPB_dCN7cv6bmpquLKh0E&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781012007668",
    //         "release_date": "2009-08-19",
    //         "episode": 47,
    //         "title": "[Ep 47] AKBINGO! - Member's Mail Contest, The AKBEST10",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152431856372&type=37&idx=13&tkn=aLK175QxQlF8GKoKxvJNz0qBJxo&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781011876596",
    //         "release_date": "2009-08-26",
    //         "episode": 48,
    //         "title": "[Ep 48] AKBINGO! - Cooking Stadium",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152430283508&type=37&idx=8&tkn=c7v2yodEpR7M8K48ZpHeKGXFiwI&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781012138740",
    //         "release_date": "2009-09-02",
    //         "episode": 49,
    //         "title": "[Ep 49] AKBINGO! - Cooking Stadium",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152433953524&type=37&idx=14&tkn=Pkc4Y48b10-wLmORpmCS2x_5pHE&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     },
    //     {
    //         "external_id": "9781012073204",
    //         "release_date": "2009-09-09",
    //         "episode": 50,
    //         "title": "[Ep 50] AKBINGO! - Member's Mail Contest, The AKBEST10",
    //         "thumbnail": "https://i.okcdn.ru/videoPreview?id=8152433036020&type=37&idx=9&tkn=ChAEZJRv5Q82FZoIpB_m38v6VBQ&fn=external_8",
    //         "tags": ["AKB48", "Variety Show"]
    //     }
    // ]
    //
    //
    // for (const video of videosSeason2) {
    //     await prisma.video.create({
    //         data: {
    //             host: {
    //                 connect: { id: 1 },
    //             },
    //             idFromHost: video.external_id,
    //             slug: `akbingo-${video.episode}`,
    //             releaseDate: new Date(video.release_date),
    //             groups: {
    //                 connect: [{ id: 2 }],
    //             },
    //             season: {
    //                 connect: { id: 2 },
    //             },
    //             episode: video.episode,
    //             title: video.title,
    //             subtitler: "AKB-48.com",
    //             thumbnailUrl: video.thumbnail,
    //             tags: video.tags,
    //         },
    //     })
    // }

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