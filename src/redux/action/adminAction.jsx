import axios from "axios";
import {
  fileUploadReducer,
  expenditureReducer,
  landLordReducer,
  propertyDetailReducer,
  addRoomReducer,
  AccomCardReducer,
  locationGetReducer,
  countryGetReducer,
  renewalNoticeReducer,
  propertyStatusReducer,
  accomodationFilterReducer,
  countryIdByLocationReducer,
  editPropertyDetailsReducer,
  propertyTypeReducer,
  addRoomTypeReducer,
  addRoomAmnetiesReducer,
  addRoomStatusReducer,
  landlordModePaymentReducer,
  landlordPaymentCycleReducer,
  expenditureServiceProviderReducer,
  createPaymentDetailsReducer,
  accomCompareReducer,
  propertyCategoryReducer,
  terminatePropertyReducer,
  viewTerminatePropertyReducer,
  employeeDashboardReducer,
  accomPropertyTableReducer,
  addEmployeeReducer,
  serviceProviderReducer,
  editAddRoomReducer,
  deleteAddRoomReducer,
  getPropertyByIdReducer,
  fetchLandLordDetailReducer,
  landLordUpdateReducer,
  getAllExpenditureReducer,
  updateExpenditureReducer,
  getAllTerminatedReducer,
  getPaymentDetailsReducer,
  editPaymentDetailsReducer,
} from "../slice/adminSlice";
import { showToast } from "../../components/commonToast/toastService";

// export function handlePropertyDetaildAPi(body) {
//   console.log("body", body);
//   return async (dispatch) => {
//     dispatch(propertyDetailReducer({ propertyDetailLoading: true }));
//     APIService(
//       "POST",
//       `https://api-iffco-test.colan.in/accomodations/v1/propertyinsert/`,
//       body
//     )
//       .then((e) => {
//         console.log("e?.data", e);
//         if (e?.status === 200 || 201) {
//           dispatch(
//             propertyDetailReducer({
//               propertyDetailLoading: false,
//               response: e?.data,
//             })
//           );
//           // successMessage("Welcome Back");
//         }
//       })
//       .catch((e) => {
//         dispatch(propertyDetailReducer({ propertyDetailLoading: false }));
//         // errorMessage(e?.response?.data?.message);
//       });
//   };
// }

export function handlePropertyDetaildAPi(body, props) {
  return async (dispatch) => {
    dispatch(propertyDetailReducer({ propertyDetailLoading: true }));
    axios
      .post(`https://api-iffco-test.colan.in/accomodations/v1/property/`, body)
      .then((e) => {
        const { status, message, response } = e.data;
        if (e?.status === "success" || e?.status === 200 || e?.status === 201) {
          sessionStorage.setItem("propertyId", e.data.details.id);

          props.onNext(); // This triggers the tab switch
          showToast(e?.data?.message, "success");
          // successToast(message);
          dispatch(
            propertyDetailReducer({
              propertyDetailLoading: false,
              response: e?.data,
            })
          );
        } else {
          // errorToast(message);
          dispatch(propertyDetailReducer({ propertyDetailLoading: false }));
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        // errorToast(e?.response?.data?.message);

        dispatch(propertyDetailReducer({ propertyDetailLoading: false }));
      });
  };
}

export function handleLandlordAPi(body, props) {
  return async (dispatch) => {
    dispatch(landLordReducer({ landLordLoading: true }));
    axios
      .post(
        `https://api-iffco-test.colan.in/accomodations/v1/landlordcreate/`,
        body
      )
      .then((e) => {
        if (e?.status === "success" || e?.status === 200 || e?.status === 201) {
          showToast(e?.data?.message, "success");
          props.onNext(); // This triggers the tab switch
          dispatch(
            landLordReducer({
              landLordLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(landLordReducer({ landLordLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function handleFetchLandlordApi(landLordId) {
  return async (dispatch) => {
    dispatch(fetchLandLordDetailReducer({ fetchLandLordDetailLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/landlordcreate/?property_id=${landLordId}`
        // body
      )
      .then((e) => {
        if (e?.status === 200) {
          // showToast(e?.data?.message,"success");
          dispatch(
            fetchLandLordDetailReducer({
              fetchLandLordDetailLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(
          fetchLandLordDetailReducer({ fetchLandLordDetailLoading: false })
        );
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function handleUpdateLandlordAPi(body) {
  return async (dispatch) => {
    dispatch(landLordUpdateReducer({ landLordUpdateLoading: true }));
    axios
      .put(
        `https://api-iffco-test.colan.in/accomodations/v1/landlordcreate/`,
        body
      )
      .then((e) => {
        if (e?.status === 200) {
          showToast(e?.data?.message, "success");
          dispatch(
            landLordUpdateReducer({
              landLordUpdateLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(landLordUpdateReducer({ landLordUpdateLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function handleExpenditureAPi(body, props) {
  return async (dispatch) => {
    dispatch(expenditureReducer({ expenditureLoading: true }));
    axios
      .post(
        `https://api-iffco-test.colan.in/accomodations/v1/create/expenditure/`,
        body
      )
      .then((e) => {
        if (e?.status === "success" || e?.status === 200 || e?.status === 201) {
          props.onNext(); // This triggers the tab switch
          showToast(e?.data?.message, "success");
          dispatch(
            expenditureReducer({
              expenditureLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(expenditureReducer({ expenditureLoading: false }));
      });
  };
}

export function handleLegalFileUploadAPi(body, props) {
  return async (dispatch) => {
    dispatch(fileUploadReducer({ fileUploadLoading: true }));
    axios
      .post(
        `https://api-iffco-test.colan.in/accomodations/v1/legal-documents/`,
        body
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          props.onNext(); // This triggers the tab switch
          dispatch(
            fileUploadReducer({
              fileUploadLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(fileUploadReducer({ fileUploadLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function handleAddRoomAPi(body) {
  return async (dispatch) => {
    dispatch(addRoomReducer({ handleRoomLoading: true }));
    axios
      .post(
        `https://api-iffco-test.colan.in/accomodations/v1/create/room/`,
        body
      )
      .then((e) => {
        // console.log("room created", e);
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          // navigate("/accomodations");
          dispatch(
            addRoomReducer({
              handleRoomLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(addRoomReducer({ handleRoomLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function accomodationFilterGetApi(countryid, searchWord) {
  return async (dispatch) => {
    dispatch(accomodationFilterReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/list/all_properties/?city_name=${0}&country=${
          countryid ? countryid : 0
        }&search=${searchWord}`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            accomodationFilterReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        // showToast(e?.data?.message,"error");
        dispatch(accomodationFilterReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function AccomodationCardGetApi() {
  return async (dispatch) => {
    dispatch(AccomCardReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/list/all_properties/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            AccomCardReducer({
              isLoading: false,
              response: e?.data,
            })
          );
          // dispatch(accomodationFilterGetApi());
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        // showToast(e?.data?.message,"error");
        dispatch(AccomCardReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function locationGetApi() {
  return async (dispatch) => {
    dispatch(locationGetReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/locations/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            locationGetReducer({
              isLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        // showToast(e?.data?.message,"error");
        dispatch(locationGetReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function countryGetApi() {
  return async (dispatch) => {
    dispatch(countryGetReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/countries/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            countryGetReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        // showToast(e?.data?.message,"error");
        dispatch(countryGetReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function countryIdByLocationGetApi(id) {
  return async (dispatch) => {
    dispatch(countryIdByLocationReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/locations-by-country/${id}/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            countryIdByLocationReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        // showToast(e?.data?.message,"error");
        dispatch(countryIdByLocationReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function renewalNoticeGetApi() {
  return async (dispatch) => {
    dispatch(renewalNoticeReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/renewalnoticedays/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            renewalNoticeReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(renewalNoticeReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function propertyStatusGetApi() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  return async (dispatch) => {
    dispatch(propertyStatusReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/propertystatus/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");

          dispatch(
            propertyStatusReducer({
              isLoading: false,
              response: e?.data,
            })
          );
          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(propertyStatusReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function propertyDetailsEditApi(body) {
  return async (dispatch) => {
    dispatch(editPropertyDetailsReducer({ isLoading: true }));
    axios
      .put(`https://api-iffco-test.colan.in/accomodations/v1/property/`, body)
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          // navigate("/accomodations");
          dispatch(
            editPropertyDetailsReducer({
              isLoading: false,
              response: e?.data,
            })
          );
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(editPropertyDetailsReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function propertyTypeGetApi() {
  return async (dispatch) => {
    dispatch(propertyTypeReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/propertytypes/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            propertyTypeReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(propertyTypeReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function addRoomTypeGetApi() {
  return async (dispatch) => {
    dispatch(addRoomTypeReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/roomtypes/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            addRoomTypeReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(addRoomTypeReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function addRoomAmnetiesGetApi() {
  return async (dispatch) => {
    dispatch(addRoomAmnetiesReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/roomamneties/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            addRoomAmnetiesReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(addRoomAmnetiesReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function addRoomStatusGetApi() {
  return async (dispatch) => {
    dispatch(addRoomStatusReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/roomstatus/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            addRoomStatusReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(addRoomStatusReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function landlordModePaymentGetApi() {
  return async (dispatch) => {
    dispatch(landlordModePaymentReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/modeofpayment/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            landlordModePaymentReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(landlordModePaymentReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function landlordPaymentCycleGetApi() {
  return async (dispatch) => {
    dispatch(landlordPaymentCycleReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/paymentcycle/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            landlordPaymentCycleReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(landlordPaymentCycleReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function expenditureServiceProviderGetApi() {
  return async (dispatch) => {
    dispatch(expenditureServiceProviderReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/serviceprovidetype/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            expenditureServiceProviderReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(expenditureServiceProviderReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function paymentDetailsCreateApi(body) {
  return async (dispatch) => {
    dispatch(createPaymentDetailsReducer({ isLoading: true }));
    axios
      .post(
        `https://api-iffco-test.colan.in/accomodations/v1/payment/details/`,
        body
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            createPaymentDetailsReducer({
              isLoading: false,
              response: e?.data,
            })
          );
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(createPaymentDetailsReducer({ isLoading: false }));
      });
  };
}

export function paymentDetailsEditApi(body) {
  return async (dispatch) => {
    dispatch(editPaymentDetailsReducer({ isLoading: true }));
    axios
      .put(
        `https://api-iffco-test.colan.in/accomodations/v1/payment/details/`,
        body
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            editPaymentDetailsReducer({
              isLoading: false,
              response: e?.data,
            })
          );
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(editPaymentDetailsReducer({ isLoading: false }));
      });
  };
}

export function paymentDetailsGetApi() {
  return async (dispatch) => {
    dispatch(getPaymentDetailsReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/payment/details/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message, "success");
          dispatch(
            getPaymentDetailsReducer({
              isLoading: false,
              response: e?.data,
            })
          );
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(getPaymentDetailsReducer({ isLoading: false }));
      });
  };
}

export function accomCompareGetApi(val) {
  return async (dispatch) => {
    dispatch(accomCompareReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/property/?id=${val.id}`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            accomCompareReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(accomCompareReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function propertyCategoryGetApi() {
  return async (dispatch) => {
    dispatch(propertyCategoryReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/accomodations/v1/propertycategory/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            propertyCategoryReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(propertyCategoryReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function terminatePropertyApi(body) {
  return async (dispatch) => {
    dispatch(terminatePropertyReducer({ isLoading: true }));
    axios
      .put(
        `https://api-iffco-test.colan.in/accomodations/v1/terminate-property/`,
        body
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            terminatePropertyReducer({
              isLoading: false,
              response: e?.data,
            })
          );
          dispatch(AccomodationCardGetApi());

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(terminatePropertyReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function viewTerminatePropertyApi(loc_id, coun_id, filter_search) {
  return async (dispatch) => {
    dispatch(viewTerminatePropertyReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/get-terminated/properties/?location=${loc_id}&country=${coun_id}&search=${filter_search}`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            viewTerminatePropertyReducer({
              isLoading: false,
              response: e?.data,
            })
          );
          dispatch(AccomodationCardGetApi());

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(viewTerminatePropertyReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function employeeDasboardGetApi() {
  return async (dispatch) => {
    dispatch(employeeDashboardReducer({ isLoading: true }));
    axios
      .get(`https://api-iffco-test.colan.in/shared/v1/room-statistics/`)
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            employeeDashboardReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(employeeDashboardReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function accomPropertyDetailsGetApi(val) {
  return async (dispatch) => {
    dispatch(accomPropertyTableReducer({ isLoading: true }));
    const queryParams = new URLSearchParams(val).toString();
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/list/room/?${queryParams}`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            accomPropertyTableReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(accomPropertyTableReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function addEmployeeApi(body) {
  return async (dispatch) => {
    dispatch(addEmployeeReducer({ isLoading: true }));
    axios
      .post(`https://api-iffco-test.colan.in/shared/v1/employee/`, body)
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            addEmployeeReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(addEmployeeReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function expenditureServiceProviderApi() {
  return async (dispatch) => {
    dispatch(serviceProviderReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/serviceprovidetype/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            serviceProviderReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(serviceProviderReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function editAddRoomApi(propertyId, body) {
  return async (dispatch) => {
    dispatch(editAddRoomReducer({ isLoading: true }));
    axios
      .put(
        `https://api-iffco-test.colan.in/accomodations/v1/edit/room/${propertyId}/`,
        body
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            editAddRoomReducer({
              isLoading: false,
              response: e?.data,
            })
          );
          dispatch(AccomodationCardGetApi());

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(editAddRoomReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function deleteAddRoomApi(delid) {
  return async (dispatch) => {
    dispatch(deleteAddRoomReducer({ isLoading: true }));
    axios
      .delete(
        `https://api-iffco-test.colan.in/accomodations/v1/edit/room/${delid}/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            deleteAddRoomReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(deleteAddRoomReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function getPropertyByIdApi(propid) {
  return async (dispatch) => {
    dispatch(getPropertyByIdReducer({ isLoading: true }));
    axios
      .get(
        // `https://api-iffco-test.colan.in/accomodations/v1/property/?id=${propid?.property}`
        `https://api-iffco-test.colan.in/accomodations/v1/property/?id=${propid}`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            getPropertyByIdReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(getPropertyByIdReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function getAllExpenditureApi(propid) {
  return async (dispatch) => {
    dispatch(getAllExpenditureReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/show/expenditure/?property_id=${propid?.property_id}`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            getAllExpenditureReducer({
              isLoading: false,
              response: e?.data,
            })
          );

          // successMessage("Welcome Back");
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(getAllExpenditureReducer({ isLoading: false }));
        // errorMessage(e?.response?.data?.message);
      });
  };
}

export function updateExpenditureApi(values) {
  return async (dispatch) => {
    dispatch(updateExpenditureReducer({ isLoading: true }));
    axios
      .put(
        `https://api-iffco-test.colan.in/accomodations/v1/show/expenditure/`,
        values
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          showToast(e?.data?.message, "success");
          dispatch(
            updateExpenditureReducer({
              isLoading: false,
              response: e?.data,
            })
          );
        }
      })
      .catch((e) => {
        showToast(e?.data?.message, "error");
        dispatch(updateExpenditureReducer({ isLoading: false }));
      });
  };
}

export function getAllTerminatedApi() {
  return async (dispatch) => {
    dispatch(getAllTerminatedReducer({ isLoading: true }));
    axios
      .get(
        `https://api-iffco-test.colan.in/accomodations/v1/get-terminated/properties/`
      )
      .then((e) => {
        if (e?.status === 200 || 201) {
          // showToast(e?.data?.message,"success");
          dispatch(
            getAllTerminatedReducer({
              isLoading: false,
              response: e?.data,
            })
          );
        }
      })
      .catch((e) => {
        // showToast(e?.data?.message,"error");
        dispatch(getAllTerminatedReducer({ isLoading: false }));
      });
  };
}
