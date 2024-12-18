import { alphabelAndNumbers, notAllowedLetters } from './regex';

export const getUserIdValidationText = (userId: string): string => {
  if (userId.trim() === '') {
    return 'User Id는 필수값입니다';
  }

  if (!alphabelAndNumbers.test(userId)) {
    return 'User Id는 숫자와 알파벳만 사용할 수 있습니다';
  }

  return '';
};

export const getNameValidationText = (name: string): string => {
  if (name.trim() === '') {
    return 'Name은 필수값입니다';
  }

  if (notAllowedLetters.test(name)) {
    return '\\, /, :, *, ?, ", <, >, |은 사용할 수 없습니다';
  }

  return '';
};

export const getOrganizationValidationText = (organization: string): string => {
  if (notAllowedLetters.test(organization)) {
    return '\\, /, :, *, ?, ", <, >, |은 사용할 수 없습니다';
  }
  return '';
};
