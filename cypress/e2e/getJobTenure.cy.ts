import getJobTenure from '../../lib/getJobTenure'

describe('Testing getJobTenure when lang is en', () => {
  it('it should return correct dates', () => {
    expect(getJobTenure(undefined, [2020, 1])).to.equal('')
    expect(getJobTenure([], [])).to.equal('')
    expect(getJobTenure([2020, 1], [2020, 1])).to.equal('1 month')
    expect(getJobTenure([2020, 1], [2020, 2])).to.equal('2 months')
    expect(getJobTenure([2020, 2], [2020, 3])).to.equal('2 months')
    expect(getJobTenure([2020, 3], [2020, 4])).to.equal('2 months')
    expect(getJobTenure([2020, 1], [2020, 4])).to.equal('4 months')
    expect(getJobTenure([2020, 2], [2020, 5])).to.equal('4 months')
    expect(getJobTenure([2020, 3], [2020, 6])).to.equal('4 months')
    expect(getJobTenure([2020, 1], [2020, 11])).to.equal('11 months')
    expect(getJobTenure([2020, 1], [2020, 12])).to.equal('1 year')
    expect(getJobTenure([2020, 1], [2021, 1])).to.equal('1 year and 1 month')
    expect(getJobTenure([2020, 1], [2021, 2])).to.equal('1 year and 2 months')
    expect(getJobTenure([2019, 10], [2021, 3])).to.equal('1 year and 6 months')
    expect(getJobTenure([2021, 12], [2022, 9])).to.equal('10 months')
  })
})

describe('Testing getJobTenure when lang is ch', () => {
  it('it should return correct dates', () => {
    expect(getJobTenure(undefined, [2020, 1])).to.equal('')
    expect(getJobTenure([], [])).to.equal('')
    expect(getJobTenure([2020, 1], [2020, 1], 'ch')).to.equal('1 個月')
    expect(getJobTenure([2020, 1], [2020, 2], 'ch')).to.equal('2 個月')
    expect(getJobTenure([2020, 2], [2020, 3], 'ch')).to.equal('2 個月')
    expect(getJobTenure([2020, 3], [2020, 4], 'ch')).to.equal('2 個月')
    expect(getJobTenure([2020, 1], [2020, 4], 'ch')).to.equal('4 個月')
    expect(getJobTenure([2020, 2], [2020, 5], 'ch')).to.equal('4 個月')
    expect(getJobTenure([2020, 3], [2020, 6], 'ch')).to.equal('4 個月')
    expect(getJobTenure([2020, 1], [2020, 11], 'ch')).to.equal('11 個月')
    expect(getJobTenure([2020, 1], [2020, 12], 'ch')).to.equal('1 年')
    expect(getJobTenure([2020, 1], [2021, 1], 'ch')).to.equal('1 年 1 個月')
    expect(getJobTenure([2020, 1], [2021, 2], 'ch')).to.equal('1 年 2 個月')
    expect(getJobTenure([2019, 10], [2021, 3], 'ch')).to.equal('1 年 6 個月')
    expect(getJobTenure([2021, 12], [2022, 9], 'ch')).to.equal('10 個月')
  })
})

export {}
