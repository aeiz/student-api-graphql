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

    return this.fetchResponseByURL(
      "application/json",
      `person-identifications` + qs,
      this.context.authorization
    ).then(json => json[0]);
  }

  list(args) {
    this.debug("get:", args);
    let qs = this.createURLParameters(args);
    return this.fetchResponseByURL(
      "application/json",
      `person-identifications` + qs,
      this.context.authorization
    ).then(json => json);
  }
}

export { PersonIdentificationService };
