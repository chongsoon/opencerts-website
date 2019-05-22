import { get } from "lodash";
import {
  IMG_LOGO_NTU,
  IMG_CERTIFICATE_SEAL,
  IMG_NTU_TEXT,
  IMG_AWARD_TEXT_A,
  IMG_AWARD_TEXT_B
} from "./images";

import { formatDate, formatDatePrefix, formatCertID } from "./functions";

export const fullWidthStyle = {
  width: "100%",
  height: "auto"
};

export const certificateDimension = {
  width: "100%",
  height: "auto"
};

export const printTextStyle = {
  fontFamily: "Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic",
  fontWeight: "500!important",
  fontSize: "1.2rem",
  textAlign: "left",
  marginBottom: "0",
  bottom: 0,
  position: "absolute"
  //textAlignVertical: "bottom"
};

export const universityNameTextStyle = {
  fontFamily: "Century Gothic,CenturyGothic,AppleGothic,sans-serif",
  fontWeight: "700",
  fontSize: "1.4375rem",
  color: "#a2703e",
  marginBottom: "0",
  textAlign: "left"
};

export const certNameTextStyle = {
  fontFamily:
    "FootlightMT,TimesNewRoman,Times New Roman,Times,Baskerville,Georgia",
  fontWeight: "700",
  fontStyle: "italic",
  fontSize: "1.875rem",
  marginBottom: "0",
  textAlign: "left",
  lineHeight: 1
};

export const certNameHonorTextStyle = {
  fontFamily: "Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic",
  fontWeight: "700",
  fontStyle: "italic",
  fontSize: "1.437rem",
  marginBottom: "0",
  textAlign: "left",
  bottom: 0,
  position: "absolute"
  //textAlignVertical: "bottom"
};

export const certIssueDateTextStyle = {
  fontFamily: "Avant Garde,Avantgarde,Century Gothic,CenturyGothic,AppleGothic",
  fontWeight: "700",
  fontStyle: "italic",
  fontSize: "1.1rem",
  marginBottom: "0",
  textAlign: "left",
  bottom: 0,
  position: "absolute"
  //textAlignVertical: "bottom"
};

export const singaporeTextStyle = {
  color: "#c7b996",
  fontSize: "1.125rem"
};

export const nameTextStyle = {
  fontFamily: "FootlightMT",
  fontSize: "2.5rem",
  textAlign: "left",
  fontStyle: "italic",
  fontWeight: "700",
  lineHeight: 1
};

export const titleTextStyle = {
  color: "rgb(30,93,200)",
  fontSize: "3rem",
  textAlign: "center"
};

export const renderSingapore = () => (
  <div
    className="row d-flex justify-content-center"
    style={{ marginTop: "2rem" }}
  >
    <p style={singaporeTextStyle}>SINGAPORE</p>
  </div>
);

export const renderLogoNTU = () => (
  <div className="row d-flex justify-content-left">
    {/* <div className="col">
      <img style={certificateDimension} src={IMG_LOGO_NTU} />
    </div> */}

    <div className="col-1" />
    <div className="col-7">
      <img style={fullWidthStyle} src={IMG_LOGO_NTU} />
    </div>
    <div className="col-1" />
  </div>
);

export const renderLogoNTUPartner = logo => (
  <div
    className="row d-flex justify-content-center align-items-center"
    style={{ marginTop: "3rem" }}
  >
    <div className="col-1" />
    <div className="col-5">
      <img style={fullWidthStyle} src={IMG_LOGO_NTU} />
    </div>
    <div className="col-5">
      <img style={fullWidthStyle} src={logo} />
    </div>
    <div className="col-1" />
  </div>
);

export const renderThreeSignatures = certificate => (
  <div>
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "8rem", marginBottom: "1rem" }}
    >
      <div className="col-6" />
      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[0].signature"
            )}
          />
          <hr />
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[0].name")}
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[0].position")}
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[0].organisation")}
        </div>
      </div>
      <div className="col-2" />
    </div>
    <div
      className="row d-flex justify-content-center align-items-end"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="col-4">
        <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
      </div>

      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[1].signature"
            )}
          />
          <hr />
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[1].name")}
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[1].position")}
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[1].organisation")}
        </div>
      </div>

      <div className="col-4">
        <div className="px-4">
          <img
            style={fullWidthStyle}
            src={get(
              certificate,
              "additionalData.certSignatories[2].signature"
            )}
          />
          <hr />
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[2].name")}
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[2].position")}
        </div>
        <div className="text-center">
          {get(certificate, "additionalData.certSignatories[2].organisation")}
        </div>
      </div>
    </div>
  </div>
);

export const renderTwoSignatures = certificate => (
  <div
    className="row d-flex justify-content-between align-items-end"
    style={{ marginTop: "1rem", marginBottom: "1rem" }}
  >
    <div className="col-3">
      <img style={fullWidthStyle} src={IMG_CERTIFICATE_SEAL} />
    </div>

    <div className="col-4">
      <div className="row">
        <div className="col">
          <div className="px">
            <img
              style={fullWidthStyle}
              src={get(
                certificate,
                "additionalData.certSignatories[0].signature"
              )}
            />
            <hr />
          </div>
          President
          <div className="text-center">
            {get(certificate, "additionalData.certSignatories[0].name")}
          </div>
          <div className="text-center">
            {get(certificate, "additionalData.certSignatories[0].position")}
          </div>
          <div className="text-center">
            {get(certificate, "additionalData.certSignatories[0].organisation")}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col">
          <div className="px">
            <img
              style={fullWidthStyle}
              src={get(
                certificate,
                "additionalData.certSignatories[1].signature"
              )}
            />
            <hr />
          </div>
          Registrar
          <div className="text-center">
            {get(certificate, "additionalData.certSignatories[1].name")}
          </div>
          <div className="text-center">
            {get(certificate, "additionalData.certSignatories[1].position")}
          </div>
          <div className="text-center">
            {get(certificate, "additionalData.certSignatories[1].organisation")}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const renderSchoolName = (
  <div>
    <div className="row d-flex justify-content-start">
      <div className="col">
        <img src={IMG_NTU_TEXT} />
      </div>
    </div>

    {/* <div className="row d-flex justify-content-start">
      <p style={universityNameTextStyle}>Nanyang Technological University</p>
    </div>
    <div className="row d-flex justify-content-start">
      <p style={singaporeTextStyle}>Republic of Singapore</p>
    </div> */}
  </div>
);

export const renderCertName = certificate => (
  <div>
    <div className="row d-flex justify-content-start">
      <div className="col">
        <p style={certNameTextStyle}>{certificate.name}</p>
      </div>
    </div>
    <div className="row d-flex mt-4 justify-content-start">
      <div className="col-1 mt-3">
        <p style={printTextStyle}>with</p>
      </div>
      <div className="col-5 mt-3">
        <p style={certNameHonorTextStyle}>
          {certificate.additionalData.classification}
        </p>
      </div>
    </div>
  </div>
);

export const renderAwardText = certificate => (
  <div>
    <div
      className="row d-flex justify-content-start pb-1"
      style={{ marginTop: "1.5rem" }}
    >
      <div className="col">
        <img src={IMG_AWARD_TEXT_A} />
      </div>
    </div>
    <div className="row d-flex justify-content-start">
      <div className="col">
        <p style={nameTextStyle}>{certificate.recipient.name}</p>
      </div>
    </div>
    <div className="row d-flex justify-content-start pb-1">
      <div className="col">
        <img src={IMG_AWARD_TEXT_B} />
      </div>
    </div>

    {/* <div
      className="row d-flex justify-content-start"
      style={{ marginTop: "1.5rem" }}
    >
      <p style={printTextStyle}>It is hereby certified that</p>
    </div>
    <div className="row d-flex justify-content-start">
      <p style={nameTextStyle}>{certificate.recipient.name}</p>
    </div>
    <div className="row d-flex justify-content-start">
      <p style={printTextStyle}>
        having satisfied the requirements of the University, <br />
        was conferred the degree of
      </p>
    </div> */}

    {renderCertName(certificate)}
  </div>
);

export const renderIssuingDate = certificate => (
  <div className="row d-flex mt-4 justify-content-start">
    <div className="col-1">
      <p style={printTextStyle}>on</p>
    </div>
    <div className="col-5">
      <p style={certIssueDateTextStyle}>{formatDate(certificate.issuedOn)}</p>
    </div>
  </div>
);

export const renderFooter = certificate => (
  <div className="container">
    <div className="row d-flex justify-content-center">
      <div className="col-6 text-left">
        {get(certificate, "additionalData.additionalCertId")}
      </div>
      <div className="col-6 text-right">{formatCertID(certificate.id)}</div>
    </div>
  </div>
);

/* eslint-disable */
// Disabled eslint as there's no way to add proptypes to an anonymous function like this
export default ({ logo }) => ({ certificate }) => (
  <div>
    <div
      className="container"
      style={{ border: 1, borderColor: "#AAA", borderStyle: "solid" }}
    >
      <div className="row justify-content-start mt-5 ml-1 mr-1">
        <div className="col-9">
          {renderSchoolName}
          {renderAwardText(certificate)}
          {renderIssuingDate(certificate)}
        </div>

        <div className="col-3">
          <div className="row">{renderLogoNTU()}</div>
        </div>
      </div>
      <div className="row">
        <div className="col-10">{renderTwoSignatures(certificate)}</div>
      </div>
    </div>
    {renderFooter(certificate)}
  </div>
);