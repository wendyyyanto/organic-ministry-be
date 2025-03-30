import DatabaseClientBase from "@base/DatabaseClientBase";

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
    private scheduleRepository;
    private scheduleDetailRepository;

    constructor() {
        super();

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

        /*
        {
            schedule_id: 3,
            event_title: 'test event',
            event_type_id: 1,
            start_date: 2025-02-02T00:00:00.000Z,
            end_date: 2025-02-02T00:00:00.000Z,
            is_teaching: false,
            created_by: 'f432874d-3314-498a-a3ed-5c63ddf39b26',
            created_at: 2025-03-30T06:16:31.844Z,
            updated_at: 2025-03-30T06:16:31.844Z
        }
        */

        const scheduleDetail = await this.scheduleDetailRepository.create({
            data: {
                schedule_id: schedule.schedule_id,
                location: args.location,
            },
        });

        return this.responseBase.success({
            statusCode: 200,
            message: "Schedule created successfully",
            data: scheduleDetail,
        });
    }
}

export default ScheduleService;
