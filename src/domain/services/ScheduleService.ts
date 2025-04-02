import DatabaseClientBase from "@base/DatabaseClientBase";
import ResponseBase from "@base/ResponseBase";
import { PrismaClient } from "@prisma/client";

interface IInsertScheduleArgs {
    eventTitle: string;
    eventTypeId: number;
    startDate: Date;
    endDate: Date;
    isTeaching: boolean;
    createdBy: string;
    location: string;
    teacherId?: string;
    audioSource?: string;
    documentSource?: string;
    zoomLink?: string;
}

class ScheduleService extends DatabaseClientBase {
    private scheduleRepository: PrismaClient["schedules"];
    private scheduleDetailRepository: PrismaClient["schedule_details"];
    private responseBase: ResponseBase;

    constructor() {
        super();

        this.responseBase = new ResponseBase();
        this.scheduleRepository = this.databaseClient.schedules;
        this.scheduleDetailRepository = this.databaseClient.schedule_details;
    }

    async insertSchedule(args: IInsertScheduleArgs) {
        const schedule = await this.scheduleRepository.create({
            data: {
                event_type_id: args.eventTypeId,
                event_title: args.eventTitle,
                start_date: new Date(args.startDate),
                end_date: new Date(args.endDate),
                is_teaching: args.isTeaching,
                created_by: args.createdBy,
            },
        });

        const scheduleDetail = await this.scheduleDetailRepository.create({
            data: {
                schedule_id: schedule.schedule_id,
                location: args.location,
            },
        });

        const data = {
            ...schedule,
            ...scheduleDetail,
        };

        return this.responseBase.success({
            statusCode: 200,
            message: "Schedule created successfully",
            data: data,
        });
    }
}

export default ScheduleService;
