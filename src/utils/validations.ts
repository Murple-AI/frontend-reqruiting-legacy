import { alphabelAndNumbers, notAllowedLetters } from './regex';

// 유효성 검사 함수들입니다.
// 유효성 검사를 통과하면 빈 문자열을 반환합니다.
// 유효성 검사 실패 시 ValidationText 컴포넌트에 props로 전달되어 화면에 표시될 문구가 반환됩니다.
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
