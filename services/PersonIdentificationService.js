import DataLoader from "dataloader";
import { BaseService } from ".";

class PersonIdentificationService extends BaseService {
  loader() {
    return new DataLoader(ids =>
      Promise.all(
        ids.map(
          function(bannerId) {
            this.debug("personIdentificationsLoader: ", bannerId);
            return this.get({ bannerId });
          }.bind(this)
        )
      )
    );
  }

  // https://xedocs.ellucian.com/xe-banner-api/erp_apis/student/person/person_identifications.html
  get(args) {
    this.debug("get:", args);
    let qs = this.createURLParameters(args);
    return this.api
      .get({
        acceptHeader: "application/json",
        relativeURL: `person-identifications` + qs
      })
      .then(json => json[0]);
  }

  list(args) {
    this.debug("list:", args);
    let qs = this.createURLParameters(args);
    return this.api.list({
      acceptHeader: "application/json",
      relativeURL: `person-identifications` + qs
    });
  }
}

export { PersonIdentificationService };
