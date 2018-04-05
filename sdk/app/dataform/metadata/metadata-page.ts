import viewModel = require("./../view-models/person-model-2");
import {RadDataForm} from "nativescript-ui-dataform";


let dataform: RadDataForm;
let model: viewModel.PersonModel2;

export function onPageLoaded(args) {

    var page = args.object;
    dataform = page.getViewById("myDataForm");
    model = new viewModel.PersonModel2();
    page.bindingContext = model;
}


export function tapped() {
    // the form field we care about. it's defined as a "Number" in the metadata
    let age = dataform.getPropertyByName("age");

    // the valueCandidate is whatever the user has entered (if any)
    console.log(`valueCandidate=${age.valueCandidate}`);

    // capture the user input for `age` here and fix it, because after validateAndCommitAll() it will be wiped out.
    let fixedValue = Number(String(age.valueCandidate));

    dataform.validateAndCommitAll().then((ok) => {
        if (ok) {
            // `person.age` will be a seemingly empty object.
            let person = model.get('person');
            console.dir(person);
            console.log("fixed value: " + fixedValue)
        } else {
            console.log("validation failed")
        }
    })
}