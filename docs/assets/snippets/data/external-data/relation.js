//Let's add the `contact` relation attribute in the `leads`dataclass

model.leads.contact = new Attribute("relatedEntity", "contacts", "contacts", { foreignKey : "contact_id" });
model.contacts.leadsContactCollection = new Attribute("relatedEntities", "leadsCollection", "contact", {reversePath : true});
