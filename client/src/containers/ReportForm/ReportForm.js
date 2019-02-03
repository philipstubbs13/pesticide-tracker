// Global import of React.
import React, { Component } from 'react';
import CompanyDetails from './CompanyDetails';
import CustomerDetails from './CustomerDetails';
import ApplicationType from './ApplicationType';
import DateTimeDetails from './DateTimeDetails';
import AdditionalDetails from './AdditionalDetails';
import BrandDetails from './BrandDetails';
import ApplicatorDetails from './ApplicatorDetails';
import Confirm from './Confirm';
import Success from './Success';

// class based React component for ReportForm.
class ReportForm extends Component {
  state = {
    step: 1,
    companyName: '',
    companyAddress: '',
    companyCity: '',
    companyState: '',
    companyZip: '',
    companyPhone: '',
    companyFax: '',
    companyEmail: '',
    applicatorName1: '',
    applicatorName2: '',
    applicatorLicense1: '',
    applicatorLicense2: '',
    customerName: '',
    customerAddress: '',
    customerCity: '',
    customerState: '',
    customerZip: '',
    customerPhone: '',
    applicationTypeAerial: false,
    applicationTypeGround: false,
    applicationDate: '',
    applicationStartTime: '',
    applicationFinishedTime: '',
    unitsTreated: '',
    temperature: '',
    windSpeed: '',
    windDirection: '',
    locationDescription: '',
    brandName: '',
    epaRegNumber: '',
    rateUsed: '',
  }

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  // Go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  // Handle fields change
  handleChange = input => (e) => {
    this.setState({ [input]: e.target.value });
  }

  handleTypeChange = name => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  // eslint-disable-next-line consistent-return
  render() {
    const { step } = this.state;
    const {
      companyName,
      companyAddress,
      companyCity,
      companyState,
      companyZip,
      companyPhone,
      companyFax,
      companyEmail,
      applicatorName1,
      applicatorName2,
      applicatorLicense1,
      applicatorLicense2,
      customerName,
      customerAddress,
      customerCity,
      customerState,
      customerZip,
      customerPhone,
      applicationTypeAerial,
      applicationTypeGround,
      applicationDate,
      applicationStartTime,
      applicationFinishedTime,
      unitsTreated,
      temperature,
      windSpeed,
      windDirection,
      locationDescription,
      brandName,
      epaRegNumber,
      rateUsed,
    } = this.state;
    const values = {
      companyName,
      companyAddress,
      companyCity,
      companyState,
      companyZip,
      companyPhone,
      companyFax,
      companyEmail,
      applicatorName1,
      applicatorName2,
      applicatorLicense1,
      applicatorLicense2,
      customerName,
      customerAddress,
      customerCity,
      customerState,
      customerZip,
      customerPhone,
      applicationTypeAerial,
      applicationTypeGround,
      applicationDate,
      applicationStartTime,
      applicationFinishedTime,
      unitsTreated,
      temperature,
      windSpeed,
      windDirection,
      locationDescription,
      brandName,
      epaRegNumber,
      rateUsed,
    };

    // eslint-disable-next-line default-case
    switch (step) {
      case 1:
        return (
          <CompanyDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <ApplicatorDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <CustomerDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 4:
        return (
          <ApplicationType
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleTypeChange={this.handleTypeChange}
            values={values}
          />
        );
      case 5:
        return (
          <DateTimeDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 6:
        return (
          <AdditionalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 7:
        return (
          <BrandDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 8:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 9:
        return (
          <Success />
        );
    }
  }
}

// export the component from this file.
export default ReportForm;
