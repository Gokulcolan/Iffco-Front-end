import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    landLordUpdateInfo: [],
    landLordUpdateLoading: false,
    landLordInfo: [],
    isLoading: false,
    propertyDetailInfo: [],
    propertyDetailLoading: false,
    expenditureInfo: [],
    expenditureLoading: false,
    fileUploadInfo: [],
    fileUploadLoading: false,
    addRoomInfo: [],
    addRoomLoading: false,
    accomCardInfo: [],
    handleAccomCardLoading: false,
    locationInfo: [],
    locationLoading: false,
    countryInfo: [],
    countryLoading: false,
    renewalInfo: [],
    renewalLoading: false,
    propertyStatusInfo: [],
    propertyLoading: false,
    accomoFilterInfo: [],
    accomodationFilterLoading: false,
    countryIdLocationInfo: [],
    countryIdLocationLoading: false,
    editPropertyDetailsInfo: [],
    editPropertyDetailsLoading: false,
    propertyTypeReducerInfo: [],
    propertyTypeReducerLoading: false,
    addRoomTypeInfo: [],
    addRoomTypeLoading: false,
    addRoomAmnetiesInfo: [],
    addRoomAmnetiesLoading: false,
    addRoomStatusInfo: [],
    addRoomStatusLoading: false,
    landlordModePaymentInfo: [],
    landlordModePaymentLoading: false,
    landlordPaymentCycleInfo: [],
    landlordPaymentCycleLoading: false,
    fetchLandLordDetailInfo: [],
    fetchLandLordDetailLoading: false,
    expenditureServiceProviderInfo: [],
    expenditureServiceProviderLoading: false,
    createPaymentDetailsInfo: [],
    createPaymentDetailsLoading: false,
    editPaymentDetailsInfo: [],
    editPaymentDetailsLoading: false,
    getPaymentDetailsInfo: [],
    getPaymentDetailsLoading: false,
    accomCompareInfo: [],
    accomCompareLoading: false,
    propertyCategoryInfo: [],
    propertyCategoryLoading: false,
    terminatePropertyInfo: [],
    terminatePropertyLoading: false,
    viewTerminatePropertyInfo: [],
    viewTerminatePropertyLoading: false,
    employeeDashboardInfo: [],
    employeeDashboardLoading: false,
    accomPropertyTableInfo: [],
    accomPropertyTableLoading: false,
    addEmployeeInfo: [],
    addEmployeeLoading: false,
    serviceProviderInfo: [],
    serviceProviderLoading: false,
    editAddRoomInfo: [],
    editAddRoomLoading: false,
    deleteAddRoomInfo: [],
    deleteAddRoomLoading: false,
    getPropertyByIdInfo: [],
    getPropertyByIdLoading: false,
    getAllExpenditureInfo: [],
    getAllExpenditureLoading: false,
    updateExpenditureInfo: [],
    updateExpenditureLoading: false,
    getAllTerminatedInfo: [],
    getAllTerminatedLoading: false,
  },
  reducers: {
    landLordUpdateReducer: (state, { payload }) => {
      state.landLordUpdateInfo = payload.response;
      state.landLordUpdateLoading = payload.landLordUpdateLoading;
    },
    landLordReducer: (state, { payload }) => {
      state.landLordInfo = payload.response;
      state.landLordLoading = payload.landLordLoading;
    },
    propertyDetailReducer: (state, { payload }) => {
      state.propertyDetailInfo = payload.response;
      state.propertyDetailLoading = payload.propertyDetailLoading;
    },
    fileUploadReducer: (state, { payload }) => {
      state.fileUploadInfo = payload.response;
      state.fileUploadLoading = payload.fileUploadLoading;
    },
    expenditureReducer: (state, { payload }) => {
      state.expenditureInfo = payload.response;
      state.expenditureLoading = payload.expenditureLoading;
    },
    addRoomReducer: (state, { payload }) => {
      // state.addRoomInfo = payload.response;
      if (payload.response) {
        state.addRoomInfo = payload.response?.data;
      }

      state.addRoomLoading = payload.expenditureLoading;
    },
    deleteAddedRoomReducer: (state, { payload }) => {
      state.addRoomInfo = [];
    },

    AccomCardReducer: (state, { payload }) => {
      state.accomCardInfo = payload.response;
      state.handleAccomCardLoading = payload.isLoading;
    },
    locationGetReducer: (state, { payload }) => {
      state.locationInfo = payload.response;
      state.locationLoading = payload.isLoading;
    },
    countryGetReducer: (state, { payload }) => {
      state.countryInfo = payload.response;
      state.countryLoading = payload.isLoading;
    },
    renewalNoticeReducer: (state, { payload }) => {
      state.renewalInfo = payload.response;
      state.renewalLoading = payload.isLoading;
    },
    propertyStatusReducer: (state, { payload }) => {
      state.propertyStatusInfo = payload.response;
      state.propertyLoading = payload.isLoading;
    },
    accomodationFilterReducer: (state, { payload }) => {
      state.accomoFilterInfo = payload.response;
      state.accomodationFilterLoading = payload.isLoading;
    },
    countryIdByLocationReducer: (state, { payload }) => {
      state.countryIdLocationInfo = payload.response;
      state.countryIdLocationLoading = payload.isLoading;
    },
    editPropertyDetailsReducer: (state, { payload }) => {
      state.editPropertyDetailsInfo = payload.response;
      state.editPropertyDetailsLoading = payload.isLoading;
    },
    propertyTypeReducer: (state, { payload }) => {
      state.propertyTypeReducerInfo = payload.response;
      state.propertyTypeReducerLoading = payload.isLoading;
    },
    addRoomTypeReducer: (state, { payload }) => {
      state.addRoomTypeInfo = payload.response;
      state.addRoomTypeLoading = payload.isLoading;
    },
    addRoomAmnetiesReducer: (state, { payload }) => {
      state.addRoomAmnetiesInfo = payload.response;
      state.addRoomAmnetiesLoading = payload.isLoading;
    },
    addRoomStatusReducer: (state, { payload }) => {
      state.addRoomStatusInfo = payload.response;
      state.addRoomStatusLoading = payload.isLoading;
    },

    fetchLandLordDetailReducer: (state, { payload }) => {
      state.fetchLandLordDetailInfo = payload.response;
      state.fetchLandLordDetailLoading = payload.isLoading;
    },

    landlordModePaymentReducer: (state, { payload }) => {
      state.landlordModePaymentInfo = payload.response;
      state.landlordModePaymentLoading = payload.isLoading;
    },
    landlordPaymentCycleReducer: (state, { payload }) => {
      state.landlordPaymentCycleInfo = payload.response;
      state.landlordPaymentCycleLoading = payload.isLoading;
    },
    expenditureServiceProviderReducer: (state, { payload }) => {
      state.expenditureServiceProviderInfo = payload.response;
      state.expenditureServiceProviderLoading = payload.isLoading;
    },
    createPaymentDetailsReducer: (state, { payload }) => {
      state.createPaymentDetailsInfo = payload.response;
      state.createPaymentDetailsLoading = payload.isLoading;
    },
    editPaymentDetailsReducer: (state, { payload }) => {
      state.editPaymentDetailsInfo = payload.response;
      state.editPaymentDetailsLoading = payload.isLoading;
    },
    getPaymentDetailsReducer: (state, { payload }) => {
      state.getPaymentDetailsInfo = payload.response;
      state.getPaymentDetailsLoading = payload.isLoading;
    },
    accomCompareReducer: (state, { payload }) => {
      payload.response && state.accomCompareInfo.push(payload.response);
      state.accomCompareLoading = payload.isLoading;
    },
    propertyCategoryReducer: (state, { payload }) => {
      state.propertyCategoryInfo = payload.response;
      state.propertyCategoryLoading = payload.isLoading;
    },
    terminatePropertyReducer: (state, { payload }) => {
      state.terminatePropertyInfo = payload.response;
      state.terminatePropertyLoading = payload.isLoading;
    },
    viewTerminatePropertyReducer: (state, { payload }) => {
      state.viewTerminatePropertyInfo = payload.response;
      state.viewTerminatePropertyLoading = payload.isLoading;
    },
    employeeDashboardReducer: (state, { payload }) => {
      state.employeeDashboardInfo = payload.response;
      state.employeeDashboardLoading = payload.isLoading;
    },
    accomPropertyTableReducer: (state, { payload }) => {
      state.accomPropertyTableInfo = payload.response;
      state.accomPropertyTableLoading = payload.isLoading;
    },
    addEmployeeReducer: (state, { payload }) => {
      state.addEmployeeInfo = payload.response;
      state.addEmployeeLoading = payload.isLoading;
    },
    serviceProviderReducer: (state, { payload }) => {
      state.serviceProviderInfo = payload.response;
      state.serviceProviderLoading = payload.isLoading;
    },
    editAddRoomReducer: (state, { payload }) => {
      state.editAddRoomInfo = payload.response;
      state.editAddRoomLoading = payload.isLoading;
    },
    deleteAddRoomReducer: (state, { payload }) => {
      state.deleteAddRoomInfo = payload.response;
      state.deleteAddRoomLoading = payload.isLoading;
    },
    getPropertyByIdReducer: (state, { payload }) => {
      state.getPropertyByIdInfo = payload.response;
      state.getPropertyByIdLoading = payload.isLoading;
    },
    getAllExpenditureReducer: (state, { payload }) => {
      state.getAllExpenditureInfo = payload.response;
      state.getAllExpenditureLoading = payload.isLoading;
    },
    updateExpenditureReducer: (state, { payload }) => {
      state.updateExpenditureInfo = payload.response;
      state.updateExpenditureLoading = payload.isLoading;
    },
    getAllTerminatedReducer: (state, { payload }) => {
      state.getAllTerminatedInfo = payload.response;
      state.getAllTerminatedLoading = payload.isLoading;
    },
  },
});

export const {
  landLordReducer,
  landLordUpdateReducer,
  propertyDetailReducer,
  expenditureReducer,
  fileUploadReducer,
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
  fetchLandLordDetailReducer,
  landlordModePaymentReducer,
  landlordPaymentCycleReducer,
  expenditureServiceProviderReducer,
  createPaymentDetailsReducer,
  editPaymentDetailsReducer,
  getPaymentDetailsReducer,
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
  getAllExpenditureReducer,
  updateExpenditureReducer,
  getAllTerminatedReducer,
  deleteAddedRoomReducer,
} = adminSlice.actions;
export const adminSelector = (state) => state.admin;
const adminReducer = adminSlice.reducer;
export default adminReducer;
