# General

Here gets overall limitation collected which across the whole system exists.

# Limitation

## One CI for all

For multi brand corporate it’s not possible to get for every brand own ci, which result in limit user experience.

## No payroll

One of the main tasks of hr system is the payroll, this is not possible by done by SuccessFactors, you will need an abap hcm system.

## No ODQ/ODP BW Connection

For SAP BW/4Hana is common to had Operational Delta Queues [ODQ](https://wiki.scn.sap.com/wiki/display/BI/Introduction+to+Operational+Delta+Queues) .  
SF didn't had this kind of API,
only a collection of odata api exists: [2776343](https://launchpad.support.sap.com/#/notes/2776343) .  
This kind of api can't consume directly by an ABAP BW System,  
you need to enable the smart data integration of the underlaying hana system like described in the note

It's point of writing not clear if this api power enough to transfer many millions of row sets on a daily basis.

## Android app

The Android app of successFactors got a rating around 3 stars: [ratinghistory](https://www.appbrain.com/app/sap-successfactors-mobile/com.successfactors.successfactors#ratinghistory)
