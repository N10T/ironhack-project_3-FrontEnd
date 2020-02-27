import React from 'react'

//custom tools
import FormBuilding from "../components/Forms/FormBuilding";
import FormKey from "../components/Forms/FormKey";

const forms = {
    building: FormBuilding,
    key: FormKey,
};


export default function AdminForms(props) {
    const { endpoint, id: resourceId, mode } = props.match.params;
    const ActiveForm = forms[endpoint];

    return (
        <div>
            <ActiveForm mode={mode} _id={resourceId} />
        </div>
    );
}

