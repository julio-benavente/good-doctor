import { Link, Typography } from "@/components";
import Form from "./Form";

const ContactPage = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-3xl mr-auto">
          <Typography variant="h1">Contact Us</Typography>

          <div className="grid grid-flow-row gap-y-5 mt-8">
            <Typography variant="subtitle1">
              We want to make sure you&lsquo;re connected to the right person as
              quickly as possible. At this time, we are prioritizing calls
              related to the care of our patients. If you&lsquo;re a patient, a
              caregiver, or a provider reaching out on behalf of a patient,
              please call <Link href="tel:8888986762">(888) 444-7777</Link>
            </Typography>
            <Typography variant="subtitle1">
              If you are not a patient, please complete the form below to help
              us assist you.
            </Typography>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
