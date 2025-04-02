import Controller from "@base/ControllerBase";
import ScheduleService from "@services/ScheduleService";

class ScheduleController extends Controller {
    private scheduleService: ScheduleService;

    constructor() {
        super();
        this.setRoutes();

        this.scheduleService = new ScheduleService();
    }

    setRoutes() {
        this.httpPost("/schedule", async (req, res, next): Promise<any> => {
            const result = await this.scheduleService.insertSchedule({
                eventTitle: req.body["event_title"],
                eventTypeId: req.body["event_type_id"],
                startDate: req.body["start_date"],
                endDate: req.body["end_date"],
                isTeaching: req.body["is_teaching"],
                createdBy: req.body["created_by"],
                location: req.body["location"],
                teacherId: req.body["teacher_id"],
                audioSource: req.body["audio_source"],
                documentSource: req.body["document_source"],
                zoomLink: req.body["zoom_link"],
            });

            return res.json(result);
        });
    }
}

export default ScheduleController;
