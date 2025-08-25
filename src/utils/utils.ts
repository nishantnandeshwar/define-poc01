import { showToast } from "../components/toaster/toastHelper";

export function getSafeVal(val: any, fallbackVal: any) {
  if (val === null || val === undefined) {
    return fallbackVal;
  }

  return val;
}

export function getAPIError(e: any) {
  let error = 'Sorry, something went wrong.'

  if (e?.Message) {
    error = e.Message;
  } else if (e?.message) {
    error = e.message;
  }

  return error;
}

export function handleAPIError(e: any) {
  const error = getAPIError(e);
  showError(error);
  return error;
}

export function showError(msg: string) {
  showToast('error', msg || 'Error Occured')
}