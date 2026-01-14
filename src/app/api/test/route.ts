import {NextRequest, NextResponse} from "next/server";
import {getGroups} from "@/lib/services/group.service";

export async function GET(req: NextRequest) {
    const groups = await getGroups();
    return NextResponse.json(groups);
}