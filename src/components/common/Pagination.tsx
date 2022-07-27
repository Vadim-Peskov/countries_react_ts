import React, { FC, useMemo } from 'react';
import styled from 'styled-components';
import dark from '../../styles/themes/dark';
import ReactPaginate from 'react-paginate';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxHooks';
import { BiChevronLeft as LeftIco, BiChevronRight as RightIco } from 'react-icons/bi'
import { setCurrentPage } from '../../store/countriesSlice';

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  
  ul {
    display: flex;
    gap: 8px;
    margin: 0;
    padding: 0;

    li {
      width: 30px;
      height: 30px;
      font-size: 14px;
      font-weight: 500;
      list-style: none;
      border: 1px solid ${props => props.theme.clr_additional};
      border-radius: 3px;
      cursor: pointer;
      transition: 0.2s;

      @media ${props => props.theme.media_tablet} {
        width: 34px;
        height: 34px;
      }

      &:hover {
        color: ${props => props.theme.clr_text};
        border: 1px solid ${props => props.theme.clr_accent};
        background-color: ${props => props.theme.clr_accent};
      }

      &.activeList {
        color: ${dark.clr_text};
        border: 1px solid ${props => props.theme.clr_accent_hover};
        background-color: ${props => props.theme.clr_accent_hover};
      }

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  @media ${props => props.theme.media_tablet} {
    justify-content: flex-start;
  }
`

export const Pagination: FC = () => {
  const dispatch = useAppDispatch();
  const countriesList = useAppSelector(state => state.countries.countriesList);
  const perPage = useAppSelector(state => state.countries.perPage);
  const currentPage = useAppSelector(state => state.countries.currentPage);


  const pageCount = useMemo(() => {
    const paginationArr: number[] = [];
    const allPages = Math.ceil(countriesList.length / perPage);
    for (let i = 1; i <= allPages; i++) paginationArr.push(i);
    return paginationArr.length;
  }, [countriesList, perPage])

  return (
    <StyledPagination>
      <ReactPaginate
        onPageChange={(e) => {dispatch(setCurrentPage(e.selected + 1))}}
        forcePage={currentPage-1}
        pageCount={pageCount}
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        breakLabel="..."
        nextLabel={<RightIco/>}
        previousLabel={<LeftIco/>}
        disabledClassName="disabledArrow"
        activeClassName="activeList"
      />
    </StyledPagination>
  )
}
 
export default Pagination;