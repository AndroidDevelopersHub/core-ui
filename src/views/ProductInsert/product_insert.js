import React from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const ProductInsert = () => {
  const [collapsed, setCollapsed] = React.useState(true);
  const [showElements, setShowElements] = React.useState(true);

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CFade timeout={300} in={showElements} unmountOnExit={true}>
            <CCard>
              <CCardHeader>Form Elements</CCardHeader>

              <CCardBody>
                <CForm
                  action=""
                  method="post"
                  encType="multipart/form-data"
                  className="form-horizontal"
                >
                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Product Name</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Name"
                      />
                      {/* <CFormText>This is a help text</CFormText> */}
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Product Price</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Product Price"
                      />
                      {/* <CFormText>This is a help text</CFormText> */}
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="text-input">Discount</CLabel>
                    </CCol>

                    <CCol md="4">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Discount Price (optional)"
                      />
                    </CCol>
                    <CCol md="5">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Discount Percent (optional)"
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">
                        Selecet Category & Department
                      </CLabel>
                    </CCol>

                    <CCol md="4">
                      <CSelect custom name="select" id="select">
                        <option value="0">Please Select Category</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>
                    <CCol md="5">
                      <CSelect custom name="select" id="select">
                        <option value="0">Please Select Department</option>
                        <option value="1">Option #1</option>
                        <option value="2">Option #2</option>
                        <option value="3">Option #3</option>
                      </CSelect>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="select">Product info</CLabel>
                    </CCol>

                    <CCol md="3">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Quantity"
                      />
                    </CCol>

                    <CCol md="3">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Brand"
                      />
                    </CCol>

                    <CCol md="3">
                      <CInput
                        id="text-input"
                        name="text-input"
                        placeholder="Ratings"
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel htmlFor="textarea-input">
                        Product Description
                      </CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CTextarea
                        name="textarea-input"
                        id="textarea-input"
                        rows="6"
                        placeholder="Product Description ..."
                      />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Sizes</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          S
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          M
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          L
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          XL
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          XXL
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Colors</CLabel>
                    </CCol>
                    <CCol md="9">
                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          Black
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          White
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          Red
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          Blue
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="custom-checkbox" inline>
                        <CInputCheckbox
                          custom
                          id="inline-checkbox1"
                          name="inline-checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="custom-checkbox"
                          htmlFor="inline-checkbox1"
                        >
                          Green
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CLabel col md="3" htmlFor="file-input">
                      Add Thumbnail
                    </CLabel>
                    <CCol xs="12" md="9">
                      <CInputFile id="file-input" name="file-input" />
                    </CCol>
                  </CFormGroup>

                  <CFormGroup row>
                    <CCol md="3">
                      <CLabel>Upload Product Images</CLabel>
                    </CCol>
                    <CCol xs="12" md="9">
                      <CInputFile
                        id="file-multiple-input"
                        name="file-multiple-input"
                        multiple
                        custom
                      />
                      <CLabel
                        htmlFor="file-multiple-input"
                        variant="custom-file"
                      >
                        Choose Files...
                      </CLabel>
                    </CCol>
                  </CFormGroup>

                  <div
                    style={{ marginTop: 65, marginBottom: 10 }}
                    className="form-actions"
                  >
                    <CButton type="submit" color="primary">
                      Save changes
                    </CButton>
                    <CButton style={{ marginLeft: 25 }} color="secondary">
                      Cancel
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CFade>
        </CCol>
      </CRow>
    </>
  );
};

export default ProductInsert;
