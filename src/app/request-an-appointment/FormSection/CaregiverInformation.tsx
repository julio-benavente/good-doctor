import { Button, Typography } from "@/components";

const CaregiverInformation = () => {
  return (
    <div className="grid grid-cols-1 gap-4 justify-items-start">
      <Typography variant="h3">
        Please call to request an appointment.
      </Typography>

      <Typography>
        Call our team to schedule a first appointment or see if Oak Street
        Health is the right fit for your loved ones.
      </Typography>
      <Button href="tel:8005596691" color="primary">
        (800) 559-6691
      </Button>
    </div>
  );
};

export default CaregiverInformation;
