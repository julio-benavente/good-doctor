import { TwentyFourSeven, Typography, Button } from "@/components";

const ExistingPatientInformation = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-start">
      <Typography variant="h3">
        Please call to schedule your next appointment.
      </Typography>

      <Typography>
        Speak with our patient <TwentyFourSeven /> support line at (844)
        808-8263 with questions for your doctor, to arrange prescription refills
        or to book your next appointment.
      </Typography>
      <Button href="tel:8888888888" color="primary">
        (888) 888-8888
      </Button>
    </div>
  );
};

export default ExistingPatientInformation;
