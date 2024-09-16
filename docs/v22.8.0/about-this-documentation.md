---
sidebar_position: 1
title: 이 문서에 대하여
---

> 이 문서는 Node.js 비공식 한국어 문서입니다!<br/>
> 원본 문서와 최대한 유사하게 번역하였습니다.<br/>
> 한국어 문서 자체적으로 추가되는 주석은 앞으로 이렇게 표시될 예정입니다.

# 이 문서에 대하여
Node.js의 공식 API 자료 문서에 오신 것을 환영합니다!

Node.js는 <a href="https://v8.dev/" target="_blank">V8 자바스크립트 엔진</a>으로 제작된 자바스크립트 런타임입니다.

## 기여하기
<a href="https://github.com/nodejs/node/issues/new" target="_blank">이슈 트래커</a>에서 이 문서의 오류를 신고하세요. 풀 리퀘스트를 제출하는 방법에 대한 지침은 <a href="https://github.com/nodejs/node/blob/HEAD/CONTRIBUTING.md" target="_blank">기여 가이드</a>를 참조하세요.

## 안정성 지수
문서 곳곳에 해당 섹션의 안정성을 나타내는 표시가 있습니다. 일부 API는 이미 검증되고 신뢰도가 높아서 변경될 가능성이 거의 없습니다. 다른 API는 새롭고 실험적이거나 위험한 것으로 알려져 있습니다.

안정성 지수는 다음과 같습니다:

<div style={{backgroundColor: "var(--red1)", color: "var(--white)"}}>
안정성: 0 - 사용 중단. 이 기능은 경고를 표시할 수 있습니다. 이전 버전과의 호환성은 보장되지 않습니다.
</div>
<div style={{backgroundColor: "var(--red3)", color: "var(--white)"}}>
안정성: 1 - 실험적. 이 기능은 <a href="https://semver.org/" target="_blank" style={{color: "var(--white)", textDecoration: "underline"}}>시맨틱 버전 관리 규칙</a>의 적용을 받지 않습니다. 향후 릴리스에서 이전 버전과 호환되지 않는 변경 또는 제거가 발생할 수 있습니다. 프로덕션 환경에서는 이 기능을 사용하지 않는 것이 좋습니다.

실험적 기능은 여러 단계로 세분화됩니다:
- 1.0 - 초기 개발 단계. 이 단계의 실험적 기능은 미완성 상태이며 상당 부분 변경될 수 있습니다.
- 1.1 - 개발 중. 이 단계의 실험적 기능은 최소한의 실행 가능성에 근접해 있습니다.
- 1.2 - 릴리스 후보. 이 단계의 실험적 기능은 곧 안정화될 예정입니다. 더 이상의 획기적인 변경은 없을 것으로 예상되지만 사용자 피드백에 따라 변경될 수 있습니다. 이 기능을 안정적으로 표시할 준비가 되었는지 확인할 수 있도록 사용자 테스트와 피드백을 부탁드립니다.
</div>
<div style={{backgroundColor: "var(--green2)", color: "var(--white)"}}>
안정성: 2 - 안정적. 이 기능은 npm 에코시스템과의 호환성이 최우선 순위입니다.
</div>
<div style={{backgroundColor: "var(--blue1)", color: "var(--white)"}}>
안정성: 3 - 레거시. 이 기능은 제거될 가능성은 낮고 여전히 시맨틱 버전 관리 규칙이 적용되지만 더 이상 적극적으로 유지 관리되지 않으며 다른 대체 기능을 사용할 수 있습니다.
</div>

기능의 사용이 해를 끼치지 않고 npm 에코시스템 내에서 널리 의존하는 경우 더 이상 사용되지 않는 대신 레거시로 표시됩니다. 레거시 기능에서 발견된 버그는 수정될 가능성이 낮습니다.

특히 라이브러리를 작성할 때 실험적 기능을 사용할 때는 주의를 기울여야 합니다. 사용자는 실험적 기능이 사용되고 있다는 사실을 인지하지 못할 수 있습니다. 실험적 API 수정으로 인해 버그나 동작 변경이 발생하면 사용자가 놀라게 될 수 있습니다. 갑작스러운 변경을 방지하려면 실험적 기능을 사용할 때 명령줄 플래그를 사용해야 할 수 있습니다. 실험적 기능은 경고를 표시할 수도 있습니다.

## 안정성 개요
<table>
    <tr>
        <th>API</th>
        <th>안정성</th>
    </tr>
    <tr>
        <td style={{backgroundColor: "var(--white)", textDecoration: "underline"}}><a href="https://nodejs.org/docs/latest/api/assert.html" target="_blank">Assert</a></td>
        <td style={{backgroundColor: "var(--green2)", color: "var(--white)"}}>(2) 안정적</td>
    </tr>
    <tr>
        <td style={{backgroundColor: "var(--white)", textDecoration: "underline"}}><a href="https://nodejs.org/docs/latest/api/assert.html" target="_blank">Assert</a></td>
        <td style={{backgroundColor: "var(--green2)", color: "var(--white)"}}>(2) 안정적</td>
    </tr>
</table>
