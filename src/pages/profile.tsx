import { Formik, FormikHelpers, Form, Field } from "formik";
import { NextPage } from "next";

import Head from "next/head";

interface Values {
  user_id: number;
}
function Profiles() {
 /*
    const submitContact = async (event: { target: { id: { value: any } } }) => {
    const id = event.target.id.value;
    const res = await fetch(`https://api.getmoonbounce.com/api/v3/user/${id}`);
    const result = await res.json();
*/
    return (
      <div>
        <div>
          <h1>Fetch A User By ID</h1>
          <Formik
            initialValues={{
              user_id: 1,
            }}
            onSubmit={(
              values: Values,
              { setSubmitting }: FormikHelpers<Values>
            ) => {
              setTimeout(async () => {
                const res = await fetch(`https://api.getmoonbounce.com/api/v3/user/${values.user_id}`);
                const result = await res.json();
                console.log(result);
                <div>{JSON.stringify(result)}</div>
                //alert(JSON.stringify(result, null, 2));
                setSubmitting(false);
              }, 500);
            }}
          >
            <Form>
              <div>
                <Field
                  
                  id="user_id"
                  name="user_id"
                  placeholder="1"
                  aria-describedby="user id"
                />
              </div>


              <button type="submit">
                Login
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    );
  };


const Profile: NextPage = () => {
    return (
        <div>
        <Head>
            <title>Profile</title>
        </Head>
        <Profiles />
        </div>
    );
    }

    export default Profile;
