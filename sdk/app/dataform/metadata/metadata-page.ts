import viewModel = require("./../view-models/person-model-2");
import {RadDataForm} from "nativescript-ui-dataform";


let dataform: RadDataForm;
let model: viewModel.PersonModel2;

export function onPageLoaded(args) {

    var page = args.object;
    dataform = page.getViewById("myDataForm")
    model = new viewModel.PersonModel2()
    page.bindingContext = model;
}


export function tapped() {
    let age = dataform.getPropertyByName("age");
    console.log(`valueCandidate=${age.valueCandidate}\nvalue=${age.value}`)
    dataform.validateAndCommitAll().then((ok) => {
        if (ok) {
            console.log("ok");
            console.dir(model.get('person'))
            console.dir(JSON.parse(dataform.editedObject))
        }
    })
}