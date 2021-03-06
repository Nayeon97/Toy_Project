💪자바스크립트 연습을 위한 토이프로젝트입니다.  
📌 **이 [블로그]를 참고하여 만들었습니다.** 
***
# 🎯 가위바위보✌✊🖐 게임 만들기
2022.1.27 (기본기능 구현 완성)

* ### 게임 규칙 (기본 기능)
    * 사용자가 가위바위보 중 한가지 값을 선택합니다.
    * 컴퓨터에서 랜덤으로 가위바위보 중 하나의 값이 출력됩니다. 
    * 두개의 값을 비교하여 점수가 업데이트 됩니다.

* ### 구현 기능
    * 컴퓨터에서 랜덤으로 가위바위보 중 하나의 값이 출력됩니다.
    * 사용자가 선택한 값과 컴퓨터가 선택한 값을 비교하여 점수가 업데이트 됩니다. 
    * 이긴 쪽의 backgroundColor 가 변경되어, 사용자가 쉽게 파악할 수 있도록 하였습니다.
    * reset 버튼을 누르면 초기상태로 변경됩니다.   

* ### 아쉬운 점
    * 컴퓨터 화면에서 가위바위보 그림이 순서대로 변하고 있는 화면을 구현하지 못하였습니다.
    * 버튼을 누른 후, 결과가 나오기 전에 버튼 기능을 정지하는 것을 생각하지 못하였습니다.
***
# 🎯  다른 글자 찾기 👀
2022.2.6 (기본기능 구현 완성)

* ### 게임 규칙 (기본 기능)
    * N x M 의 화면에 하나만 다른 글자로 채워서 보여준다.
    * 해당 게임의 정답 글자 위치는 매번 달라져야 한다.
    * 정답 글자를 선택하면 다음 stage로 넘어간다.
    * 아니면 실패 메시지를 띄우고 종료한다.

* ### 구현 기능
    * 4x4화면에 하나만 '먽' 글자로 출력한다.
    * 정답 글자 위치는 랜덤함수를 이용해 매번 바뀐다.
    * 정답일 경우 다음 게임 화면으로 넘어간다.
    * 사용자가 '멵'글자를 누르거나, 시간초과가 될 경우 게임은 종료된다.
    * 게임이 종료될때, 사용자가 몇번 성공하였는지 보여준다.

* ### 아쉬운 점
    * 난이도 상승을 구현하지 못한 점이 아쉽다. (3x3 -> 4x4 -> 5x5 ...) 

***
# 🎯 카드 짝 맞추기🃏
2022.2.13 (1차 완성)

* ### 게임 규칙 (기본 기능)
    * 2쌍이 같은 랜덤한 카드 N장의 뒷면을 보여준다.
    * 1장을 선택하면 해당카드의 앞면을 보여준다.
    * 나머지 다른 1장을 선택했을때 같다면 보여주고 아니라면 다시 둘다 뒤집어 둔다.
    * 다 맞으면 성공

* ### 구현 기능
    * Object, Array를 사용하여 구현하였다.
    * 1장을 선택하면 해당카드의 앞면을 보여준다.
    * 2장의 카드를 선택하면, 카드의 앞면 그림이 맞는지 비교한다.

* ### 아쉬운 점
    이번 토이프로젝트는 개인적으로 구현하지 못한 부분이 많아서 아쉬움이 많다. Object의 개념을 보기만 했지, 직접 구현을 하니 간단한 것에도 헷갈려서 여러번 콘솔로 
    확인해가면서, 구현을 진행하였다. 구현할 당시에 동기비동기, promise, Json 을 배웠어서, '구현하면서 익혀야지~' 라는 생각에 json 파일을 따로 만들었다. 하지만, 개념도 제대로 
    갖춰지지 않은 상태에서 구현하는 것은 나에게는 너무 어려운 일이였다. 결국 비동기, 프로미스는 구현에 활용하지 못하였다. 다시 처음부터 개념을 공부한 후에 다시 도전할 예정이다. 
 
 * ### 향후 구현 예정
    * 사용자가 모든 카드의 짝 맞추는 것을 성공하면, 다시 카드가 reset.
    * 비동기 활용하여 구현하기.
 
 ***
# 🎯 계산기
2022.2.20일 (완성)

* ### 구현 기능
    * 기본 계산을 할 수 있다. (ex 아이폰 계산기)
    * 화면을 두개로 구성하여, 이전 계산 결과를 출력하는 화면과 현재 계산을 출력하는 화면으로 두가지 나누었다.



[블로그]: <https://velog.io/@teo/2021-%EC%9B%B9-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B3%B5%EB%B6%80%EB%B2%95-%EC%9E%85%EB%AC%B8%EC%9E%90%ED%8E%B8-%EC%BB%A4%EB%A6%AC%ED%81%98%EB%9F%BC>
