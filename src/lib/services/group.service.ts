import prisma from '@/lib/prisma'

export async function getGroups() {
    return prisma.group.findMany()
}