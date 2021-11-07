var fs = require("fs");

exports.build = function (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, title, appname, main, second, url, app2true, q1b, q2b, q3b, q4b, q5b, q6b, q7b, q8b, q9b, q10b, appname2, url2, app3true, q1c, q2c, q3c, q4c, q5c, q6c, q7c, q8c, q9c, q10c, appname3, url3, app4true, q1d, q2d, q3d, q4d, q5d, q6d, q7d, q8d, q9d, q10d, appname4, url4, app5true, q1e, q2e, q3e, q4e, q5e, q6e, q7e, q8e, q9e, q10e, appname5, url5, callback) {
  
  var game = `
  <roblox xmlns:xmime="http://www.w3.org/2005/05/xmlmime" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="http://www.roblox.com/roblox.xsd" version="4">
	<External>null</External>
	<External>nil</External>
	<Item class="Workspace" referent="RBX89C0206CB18E4899AA206EB943959607">
		<Properties>
			<bool name="AllowThirdPartySales">false</bool>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="CollisionGroups">Default^0^1</string>
			<Ref name="CurrentCamera">RBX05A145145B41408BA9E223A3C0D06CFA</Ref>
			<double name="DistributedGameTime">0</double>
			<bool name="ExplicitAutoJoints">true</bool>
			<float name="FallenPartsDestroyHeight">-500</float>
			<bool name="FilteringEnabled">true</bool>
			<float name="Gravity">196.199997</float>
			<CoordinateFrame name="ModelInPrimary">
				<X>0</X>
				<Y>0</Y>
				<Z>0</Z>
				<R00>1</R00>
				<R01>0</R01>
				<R02>0</R02>
				<R10>0</R10>
				<R11>1</R11>
				<R12>0</R12>
				<R20>0</R20>
				<R21>0</R21>
				<R22>1</R22>
			</CoordinateFrame>
			<string name="Name">Workspace</string>
			<Ref name="PrimaryPart">null</Ref>
			<bool name="StreamingEnabled">false</bool>
			<int name="StreamingMinRadius">64</int>
			<token name="StreamingPauseMode">0</token>
			<int name="StreamingTargetRadius">1024</int>
			<BinaryString name="Tags"></BinaryString>
			<bool name="TemporaryLegacyPhysicsSolverOverrideStreaming">false</bool>
			<bool name="TerrainWeldsFixed">true</bool>
		</Properties>
		<Item class="Camera" referent="RBX05A145145B41408BA9E223A3C0D06CFA">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<CoordinateFrame name="CFrame">
					<X>0.321689844</X>
					<Y>18.2346153</Y>
					<Z>23.7645969</Z>
					<R00>0.98357147</R00>
					<R01>-0.0819535926</R01>
					<R02>0.160844535</R02>
					<R10>-0</R10>
					<R11>0.891008377</R11>
					<R12>0.453987002</R12>
					<R20>-0.180519685</R20>
					<R21>-0.446528673</R21>
					<R22>0.876370251</R22>
				</CoordinateFrame>
				<Ref name="CameraSubject">null</Ref>
				<token name="CameraType">0</token>
				<float name="FieldOfView">70</float>
				<CoordinateFrame name="Focus">
					<X>0</X>
					<Y>17.3266392</Y>
					<Z>22.0118523</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CoordinateFrame>
				<bool name="HeadLocked">true</bool>
				<float name="HeadScale">1</float>
				<string name="Name">Camera</string>
				<BinaryString name="Tags"></BinaryString>
			</Properties>
		</Item>
		<Item class="Part" referent="RBXC4531ECE8E5E4E7C891088357280A0BB">
			<Properties>
				<bool name="Anchored">true</bool>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<float name="BackParamA">-0.5</float>
				<float name="BackParamB">0.5</float>
				<token name="BackSurface">0</token>
				<token name="BackSurfaceInput">0</token>
				<float name="BottomParamA">-0.5</float>
				<float name="BottomParamB">0.5</float>
				<token name="BottomSurface">4</token>
				<token name="BottomSurfaceInput">0</token>
				<CoordinateFrame name="CFrame">
					<X>0</X>
					<Y>-10</Y>
					<Z>0</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CoordinateFrame>
				<bool name="CanCollide">true</bool>
				<bool name="CastShadow">true</bool>
				<int name="CollisionGroupId">0</int>
				<Color3uint8 name="Color3uint8">4284702562</Color3uint8>
				<PhysicalProperties name="CustomPhysicalProperties">
					<CustomPhysics>false</CustomPhysics>
				</PhysicalProperties>
				<float name="FrontParamA">-0.5</float>
				<float name="FrontParamB">0.5</float>
				<token name="FrontSurface">0</token>
				<token name="FrontSurfaceInput">0</token>
				<float name="LeftParamA">-0.5</float>
				<float name="LeftParamB">0.5</float>
				<token name="LeftSurface">0</token>
				<token name="LeftSurfaceInput">0</token>
				<bool name="Locked">true</bool>
				<bool name="Massless">false</bool>
				<token name="Material">256</token>
				<string name="Name">Baseplate</string>
				<float name="Reflectance">0</float>
				<float name="RightParamA">-0.5</float>
				<float name="RightParamB">0.5</float>
				<token name="RightSurface">0</token>
				<token name="RightSurfaceInput">0</token>
				<int name="RootPriority">0</int>
				<Vector3 name="RotVelocity">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<BinaryString name="Tags"></BinaryString>
				<float name="TopParamA">-0.5</float>
				<float name="TopParamB">0.5</float>
				<token name="TopSurface">3</token>
				<token name="TopSurfaceInput">0</token>
				<float name="Transparency">0</float>
				<Vector3 name="Velocity">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<token name="formFactorRaw">0</token>
				<token name="shape">1</token>
				<Vector3 name="size">
					<X>512</X>
					<Y>20</Y>
					<Z>512</Z>
				</Vector3>
			</Properties>
		</Item>
		<Item class="Terrain" referent="RBX548A4D8779CA4F27BFFD960306603947">
			<Properties>
				<bool name="Anchored">true</bool>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<float name="BackParamA">-0.5</float>
				<float name="BackParamB">0.5</float>
				<token name="BackSurface">0</token>
				<token name="BackSurfaceInput">0</token>
				<float name="BottomParamA">-0.5</float>
				<float name="BottomParamB">0.5</float>
				<token name="BottomSurface">4</token>
				<token name="BottomSurfaceInput">0</token>
				<CoordinateFrame name="CFrame">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
					<R00>1</R00>
					<R01>0</R01>
					<R02>0</R02>
					<R10>0</R10>
					<R11>1</R11>
					<R12>0</R12>
					<R20>0</R20>
					<R21>0</R21>
					<R22>1</R22>
				</CoordinateFrame>
				<bool name="CanCollide">true</bool>
				<bool name="CastShadow">true</bool>
				<int name="CollisionGroupId">0</int>
				<Color3uint8 name="Color3uint8">4288914085</Color3uint8>
				<PhysicalProperties name="CustomPhysicalProperties">
					<CustomPhysics>false</CustomPhysics>
				</PhysicalProperties>
				<bool name="Decoration">false</bool>
				<float name="FrontParamA">-0.5</float>
				<float name="FrontParamB">0.5</float>
				<token name="FrontSurface">0</token>
				<token name="FrontSurfaceInput">0</token>
				<float name="LeftParamA">-0.5</float>
				<float name="LeftParamB">0.5</float>
				<token name="LeftSurface">0</token>
				<token name="LeftSurfaceInput">0</token>
				<bool name="Locked">true</bool>
				<bool name="Massless">false</bool>
				<token name="Material">256</token>
				<BinaryString name="MaterialColors"><![CDATA[AAAAAAAAan8/P39rf2Y/ilY+j35fi21PZmxvZbDqw8faiVpHOi4kHh4lZlw76JxKc3trhHta
gcLgc4RKxr21zq2UlJSM]]></BinaryString>
				<string name="Name">Terrain</string>
				<BinaryString name="PhysicsGrid">AgMAAAAAAAAAAAAAAAA=</BinaryString>
				<float name="Reflectance">0</float>
				<float name="RightParamA">-0.5</float>
				<float name="RightParamB">0.5</float>
				<token name="RightSurface">0</token>
				<token name="RightSurfaceInput">0</token>
				<int name="RootPriority">0</int>
				<Vector3 name="RotVelocity">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<BinaryString name="SmoothGrid">AQU=</BinaryString>
				<BinaryString name="Tags"></BinaryString>
				<float name="TopParamA">-0.5</float>
				<float name="TopParamB">0.5</float>
				<token name="TopSurface">3</token>
				<token name="TopSurfaceInput">0</token>
				<float name="Transparency">0</float>
				<Vector3 name="Velocity">
					<X>0</X>
					<Y>0</Y>
					<Z>0</Z>
				</Vector3>
				<Color3 name="WaterColor">
					<R>0.0470588282</R>
					<G>0.329411775</G>
					<B>0.360784322</B>
				</Color3>
				<float name="WaterReflectance">1</float>
				<float name="WaterTransparency">0.300000012</float>
				<float name="WaterWaveSize">0.150000006</float>
				<float name="WaterWaveSpeed">10</float>
				<Vector3 name="size">
					<X>2044</X>
					<Y>252</Y>
					<Z>2044</Z>
				</Vector3>
			</Properties>
		</Item>
	</Item>
	<Item class="SoundService" referent="RBXDF758F73017F4BDFA8B42E4771C7B75F">
		<Properties>
			<token name="AmbientReverb">0</token>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<float name="DistanceFactor">3.32999992</float>
			<float name="DopplerScale">1</float>
			<string name="Name">SoundService</string>
			<bool name="RespectFilteringEnabled">true</bool>
			<float name="RolloffScale">1</float>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="NonReplicatedCSGDictionaryService" referent="RBX56518D80BC4C4E73A5EADD5E35D3BE14">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">NonReplicatedCSGDictionaryService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="CSGDictionaryService" referent="RBX3AC81AFD92D14623A0706194B7988778">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">CSGDictionaryService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="Chat" referent="RBX6C7E5F950832429781E0DC8F432CB411">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="BubbleChatEnabled">false</bool>
			<bool name="LoadDefaultChat">true</bool>
			<string name="Name">Chat</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="TimerService" referent="RBX9AFBA6F126754BE78D566C0C44D86730">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">Instance</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="Players" referent="RBX308ADF01585A4EDCBD5CF64752F8DD35">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="CharacterAutoLoads">true</bool>
			<int name="MaxPlayersInternal">12</int>
			<string name="Name">Players</string>
			<int name="PreferredPlayersInternal">56832</int>
			<float name="RespawnTime">5</float>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="ReplicatedFirst" referent="RBXA27BBB6C255740BAB266B31FE02654D3">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">ReplicatedFirst</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="TweenService" referent="RBX1F196796819349BBA37F696F36838209">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">TweenService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="StudioData" referent="RBXB89D29DD6FD24D3EB7E637399064DE7A">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="EnableScriptCollabOnLoad">false</bool>
			<string name="Name">StudioData</string>
			<int64 name="SrcPlaceId">4455948723</int64>
			<int64 name="SrcUniverseId">1419091107</int64>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="StarterPlayer" referent="RBX470153F05F5F4BB3B57F683778FA49BA">
		<Properties>
			<bool name="AllowCustomAnimations">true</bool>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="AutoJumpEnabled">true</bool>
			<float name="CameraMaxZoomDistance">128</float>
			<float name="CameraMinZoomDistance">0.5</float>
			<token name="CameraMode">0</token>
			<float name="CharacterJumpHeight">0</float>
			<float name="CharacterJumpPower">0</float>
			<float name="CharacterMaxSlopeAngle">89</float>
			<bool name="CharacterUseJumpPower">true</bool>
			<float name="CharacterWalkSpeed">0</float>
			<token name="DevCameraOcclusionMode">0</token>
			<token name="DevComputerCameraMovementMode">0</token>
			<token name="DevComputerMovementMode">0</token>
			<token name="DevTouchCameraMovementMode">0</token>
			<token name="DevTouchMovementMode">0</token>
			<bool name="EnableMouseLockOption">true</bool>
			<int64 name="GameSettingsAssetIDFace">0</int64>
			<int64 name="GameSettingsAssetIDHead">0</int64>
			<int64 name="GameSettingsAssetIDLeftArm">0</int64>
			<int64 name="GameSettingsAssetIDLeftLeg">0</int64>
			<int64 name="GameSettingsAssetIDPants">0</int64>
			<int64 name="GameSettingsAssetIDRightArm">0</int64>
			<int64 name="GameSettingsAssetIDRightLeg">0</int64>
			<int64 name="GameSettingsAssetIDShirt">0</int64>
			<int64 name="GameSettingsAssetIDTeeShirt">0</int64>
			<int64 name="GameSettingsAssetIDTorso">0</int64>
			<token name="GameSettingsAvatar">1</token>
			<token name="GameSettingsR15Collision">0</token>
			<NumberRange name="GameSettingsScaleRangeBodyType">0 1 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeHead">0.95 1 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeHeight">0.9 1.05 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeProportion">0 1 </NumberRange>
			<NumberRange name="GameSettingsScaleRangeWidth">0.7 1 </NumberRange>
			<float name="HealthDisplayDistance">100</float>
			<bool name="LoadCharacterAppearance">true</bool>
			<string name="Name">StarterPlayer</string>
			<float name="NameDisplayDistance">100</float>
			<BinaryString name="Tags"></BinaryString>
			<bool name="UserEmotesEnabled">true</bool>
		</Properties>
		<Item class="StarterPlayerScripts" referent="RBX5AAA131E43DC438F8F6C9DFA0C362170">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<string name="Name">StarterPlayerScripts</string>
				<BinaryString name="Tags"></BinaryString>
			</Properties>
			<Item class="LocalScript" referent="RBX2CBDD064982C4AE68917CBC813AD5932">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="Disabled">false</bool>
					<Content name="LinkedSource"><null></null></Content>
					<string name="Name">LocalScript</string>
					<string name="ScriptGuid">{5A7F501D-157B-4899-A1D3-0110AC66FB1F}</string>
					<ProtectedString name="Source"><![CDATA[print("Application Center developed by modern_o!")
--Remove top bar
wait()
pcall(function()
	local starterGui = game:GetService('StarterGui')
	starterGui:SetCore("TopbarEnabled", false)
end)]]></ProtectedString>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
		</Item>
		<Item class="StarterCharacterScripts" referent="RBXABDC19B2865744A493A33611329A8CA7">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<string name="Name">StarterCharacterScripts</string>
				<BinaryString name="Tags"></BinaryString>
			</Properties>
		</Item>
	</Item>
	<Item class="StarterPack" referent="RBX6B537B4C2FF8461A8C8C60AADDA303ED">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">StarterPack</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="StarterGui" referent="RBXD7762808DBC54964933381248BAB9104">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">StarterGui</string>
			<bool name="ResetPlayerGuiOnSpawn">true</bool>
			<token name="ScreenOrientation">2</token>
			<bool name="ShowDevelopmentGui">true</bool>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
		<Item class="ScreenGui" referent="RBX997A5A929EE146B7925AF8F7793C9546">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<bool name="AutoLocalize">true</bool>
				<int name="DisplayOrder">0</int>
				<bool name="Enabled">true</bool>
				<bool name="IgnoreGuiInset">false</bool>
				<string name="Name">Application Center</string>
				<bool name="ResetOnSpawn">true</bool>
				<Ref name="RootLocalizationTable">null</Ref>
				<BinaryString name="Tags"></BinaryString>
				<token name="ZIndexBehavior">1</token>
			</Properties>
			<Item class="Frame" referent="RBX2B030FF6785F42F6A15A214CDA05F674">
				<Properties>
					<bool name="Active">false</bool>
					<Vector2 name="AnchorPoint">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="AutoLocalize">true</bool>
					<Color3 name="BackgroundColor3">
						<R>1</R>
						<G>0.274509817</G>
						<B>0.321568638</B>
					</Color3>
					<float name="BackgroundTransparency">0</float>
					<Color3 name="BorderColor3">
						<R>0.105882362</R>
						<G>0.164705887</G>
						<B>0.207843155</B>
					</Color3>
					<token name="BorderMode">0</token>
					<int name="BorderSizePixel">0</int>
					<bool name="ClipsDescendants">false</bool>
					<bool name="Draggable">false</bool>
					<int name="LayoutOrder">0</int>
					<string name="Name">Main</string>
					<Ref name="NextSelectionDown">null</Ref>
					<Ref name="NextSelectionLeft">null</Ref>
					<Ref name="NextSelectionRight">null</Ref>
					<Ref name="NextSelectionUp">null</Ref>
					<UDim2 name="Position">
						<XS>0</XS>
						<XO>0</XO>
						<YS>-0.100000001</YS>
						<YO>0</YO>
					</UDim2>
					<Ref name="RootLocalizationTable">null</Ref>
					<float name="Rotation">0</float>
					<bool name="Selectable">false</bool>
					<Ref name="SelectionImageObject">null</Ref>
					<UDim2 name="Size">
						<XS>1001.3158</XS>
						<XO>0</XO>
						<YS>1001.992</YS>
						<YO>0</YO>
					</UDim2>
					<token name="SizeConstraint">0</token>
					<token name="Style">0</token>
					<BinaryString name="Tags"></BinaryString>
					<bool name="Visible">false</bool>
					<int name="ZIndex">1</int>
				</Properties>
				<Item class="TextLabel" referent="RBXC59E20BF49BD430694B5E59A4C8DA440">
					<Properties>
						<bool name="Active">false</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882362</R>
							<G>0.164705887</G>
							<B>0.207843155</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<token name="Font">12</token>
						<int name="LayoutOrder">0</int>
						<float name="LineHeight">1</float>
						<string name="Name">Title</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>7.35873909e-05</XS>
							<XO>0</XO>
							<YS>0.000200795228</YS>
							<YO>0</YO>
						</UDim2>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<bool name="Selectable">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000863337715</XS>
							<XO>0</XO>
							<YS>9.940358e-05</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<BinaryString name="Tags"></BinaryString>
						<string name="Text">{No data}</string>
						<Color3 name="TextColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<bool name="TextScaled">true</bool>
						<float name="TextSize">35</float>
						<Color3 name="TextStrokeColor3">
							<R>0</R>
							<G>0</G>
							<B>0</B>
						</Color3>
						<float name="TextStrokeTransparency">1</float>
						<float name="TextTransparency">0</float>
						<token name="TextTruncate">0</token>
						<bool name="TextWrapped">true</bool>
						<token name="TextXAlignment">2</token>
						<token name="TextYAlignment">1</token>
						<bool name="Visible">true</bool>
						<int name="ZIndex">1</int>
					</Properties>
				</Item>
				<Item class="ImageLabel" referent="RBX21F2F44E8ACD4799AE47E182333AE886">
					<Properties>
						<bool name="Active">false</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882362</R>
							<G>0.164705887</G>
							<B>0.207843155</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<string name="Name">Answer</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>6.17608457e-05</XS>
							<XO>0</XO>
							<YS>0.000401590456</YS>
							<YO>0</YO>
						</UDim2>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000863337715</XS>
							<XO>0</XO>
							<YS>0.000465208752</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">true</bool>
						<int name="ZIndex">3</int>
					</Properties>
					<Item class="ImageLabel" referent="RBX8750879D9967464AA7438E3D8216A234">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0.5</X>
								<Y>0.5</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<float name="BackgroundTransparency">1</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<Content name="Image"><url>rbxassetid://2790390993</url></Content>
							<Color3 name="ImageColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<Vector2 name="ImageRectOffset">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<Vector2 name="ImageRectSize">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<float name="ImageTransparency">0</float>
							<int name="LayoutOrder">0</int>
							<string name="Name">Container</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.5</XS>
								<XO>0</XO>
								<YS>0.5</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<token name="ScaleType">1</token>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>1.00304413</XS>
								<XO>0</XO>
								<YS>1.00854707</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<Rect2D name="SliceCenter">
								<min>
									<X>16</X>
									<Y>16</Y>
								</min>
								<max>
									<X>240</X>
									<Y>240</Y>
								</max>
							</Rect2D>
							<float name="SliceScale">1</float>
							<BinaryString name="Tags"></BinaryString>
							<UDim2 name="TileSize">
								<XS>1</XS>
								<XO>0</XO>
								<YS>1</YS>
								<YO>0</YO>
							</UDim2>
							<bool name="Visible">true</bool>
							<int name="ZIndex">2</int>
						</Properties>
						<Item class="TextBox" referent="RBX516AA6D74F7942A99E8F0959C1E6D2EF">
							<Properties>
								<bool name="Active">true</bool>
								<Vector2 name="AnchorPoint">
									<X>0</X>
									<Y>0</Y>
								</Vector2>
								<BinaryString name="AttributesSerialize"></BinaryString>
								<bool name="AutoLocalize">true</bool>
								<Color3 name="BackgroundColor3">
									<R>1</R>
									<G>1</G>
									<B>1</B>
								</Color3>
								<float name="BackgroundTransparency">1</float>
								<Color3 name="BorderColor3">
									<R>0.105882362</R>
									<G>0.164705887</G>
									<B>0.207843155</B>
								</Color3>
								<token name="BorderMode">0</token>
								<int name="BorderSizePixel">1</int>
								<bool name="ClearTextOnFocus">false</bool>
								<bool name="ClipsDescendants">false</bool>
								<bool name="Draggable">false</bool>
								<token name="Font">12</token>
								<int name="LayoutOrder">0</int>
								<float name="LineHeight">1</float>
								<bool name="MultiLine">true</bool>
								<string name="Name">AnswerText</string>
								<Ref name="NextSelectionDown">null</Ref>
								<Ref name="NextSelectionLeft">null</Ref>
								<Ref name="NextSelectionRight">null</Ref>
								<Ref name="NextSelectionUp">null</Ref>
								<Color3 name="PlaceholderColor3">
									<R>0.699999988</R>
									<G>0.699999988</G>
									<B>0.699999988</B>
								</Color3>
								<string name="PlaceholderText">Your answer here.</string>
								<UDim2 name="Position">
									<XS>0</XS>
									<XO>0</XO>
									<YS>0</YS>
									<YO>0</YO>
								</UDim2>
								<Ref name="RootLocalizationTable">null</Ref>
								<float name="Rotation">0</float>
								<bool name="Selectable">true</bool>
								<Ref name="SelectionImageObject">null</Ref>
								<bool name="ShowNativeInput">true</bool>
								<UDim2 name="Size">
									<XS>1</XS>
									<XO>0</XO>
									<YS>0.99999994</YS>
									<YO>0</YO>
								</UDim2>
								<token name="SizeConstraint">0</token>
								<BinaryString name="Tags"></BinaryString>
								<string name="Text"></string>
								<Color3 name="TextColor3">
									<R>1</R>
									<G>1</G>
									<B>1</B>
								</Color3>
								<bool name="TextEditable">true</bool>
								<bool name="TextScaled">false</bool>
								<float name="TextSize">14</float>
								<Color3 name="TextStrokeColor3">
									<R>0</R>
									<G>0</G>
									<B>0</B>
								</Color3>
								<float name="TextStrokeTransparency">1</float>
								<float name="TextTransparency">0</float>
								<token name="TextTruncate">0</token>
								<bool name="TextWrapped">true</bool>
								<token name="TextXAlignment">2</token>
								<token name="TextYAlignment">1</token>
								<bool name="Visible">true</bool>
								<int name="ZIndex">1</int>
							</Properties>
						</Item>
					</Item>
				</Item>
				<Item class="ImageButton" referent="RBX25748461E02B42828C5246CD43D5868D">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882362</R>
							<G>0.164705887</G>
							<B>0.207843155</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">Next</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.000361366634</XS>
							<XO>0</XO>
							<YS>0.000910536735</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.0002628121</XS>
							<XO>0</XO>
							<YS>0.000113320079</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">true</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBX0A3E3EF45DF44482842A028C4566CC98">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0.5</X>
								<Y>0.5</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>0.639215708</R>
								<G>0.635294139</G>
								<B>0.647058845</B>
							</Color3>
							<float name="BackgroundTransparency">1</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.5</XS>
								<XO>0</XO>
								<YS>0.5</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>1</XS>
								<XO>0</XO>
								<YS>0.899999976</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Next &gt;</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">14</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">2</int>
						</Properties>
					</Item>
				</Item>
			</Item>
			<Item class="Frame" referent="RBX5ADDB5EAC92E472DA3B4AD11856CC420">
				<Properties>
					<bool name="Active">false</bool>
					<Vector2 name="AnchorPoint">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="AutoLocalize">true</bool>
					<Color3 name="BackgroundColor3">
						<R>1</R>
						<G>0.274509817</G>
						<B>0.321568638</B>
					</Color3>
					<float name="BackgroundTransparency">0</float>
					<Color3 name="BorderColor3">
						<R>0.105882362</R>
						<G>0.164705887</G>
						<B>0.207843155</B>
					</Color3>
					<token name="BorderMode">0</token>
					<int name="BorderSizePixel">0</int>
					<bool name="ClipsDescendants">false</bool>
					<bool name="Draggable">false</bool>
					<int name="LayoutOrder">0</int>
					<string name="Name">Submit</string>
					<Ref name="NextSelectionDown">null</Ref>
					<Ref name="NextSelectionLeft">null</Ref>
					<Ref name="NextSelectionRight">null</Ref>
					<Ref name="NextSelectionUp">null</Ref>
					<UDim2 name="Position">
						<XS>0</XS>
						<XO>0</XO>
						<YS>-0.100000001</YS>
						<YO>0</YO>
					</UDim2>
					<Ref name="RootLocalizationTable">null</Ref>
					<float name="Rotation">0</float>
					<bool name="Selectable">false</bool>
					<Ref name="SelectionImageObject">null</Ref>
					<UDim2 name="Size">
						<XS>1001.3158</XS>
						<XO>0</XO>
						<YS>1001.992</YS>
						<YO>0</YO>
					</UDim2>
					<token name="SizeConstraint">0</token>
					<token name="Style">0</token>
					<BinaryString name="Tags"></BinaryString>
					<bool name="Visible">false</bool>
					<int name="ZIndex">1</int>
				</Properties>
				<Item class="TextLabel" referent="RBX533701BD7FAF4B95A06D76EEC73D5E26">
					<Properties>
						<bool name="Active">false</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882362</R>
							<G>0.164705887</G>
							<B>0.207843155</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<token name="Font">12</token>
						<int name="LayoutOrder">0</int>
						<float name="LineHeight">1</float>
						<string name="Name">Text</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>6.70170921e-05</XS>
							<XO>0</XO>
							<YS>0.000461232616</YS>
							<YO>0</YO>
						</UDim2>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<bool name="Selectable">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000863337715</XS>
							<XO>0</XO>
							<YS>9.940358e-05</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<BinaryString name="Tags"></BinaryString>
						<string name="Text">You have finished this application. Are you ready to submit?</string>
						<Color3 name="TextColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<bool name="TextScaled">true</bool>
						<float name="TextSize">35</float>
						<Color3 name="TextStrokeColor3">
							<R>0</R>
							<G>0</G>
							<B>0</B>
						</Color3>
						<float name="TextStrokeTransparency">1</float>
						<float name="TextTransparency">0</float>
						<token name="TextTruncate">0</token>
						<bool name="TextWrapped">true</bool>
						<token name="TextXAlignment">2</token>
						<token name="TextYAlignment">1</token>
						<bool name="Visible">true</bool>
						<int name="ZIndex">1</int>
					</Properties>
				</Item>
				<Item class="ImageButton" referent="RBX19F99AC74C774216B3F77458937979DD">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">SubmitButton</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.000366622873</XS>
							<XO>0</XO>
							<YS>0.000620278297</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.0002628121</XS>
							<XO>0</XO>
							<YS>0.000113320079</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">true</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBX98E66AB0A0A443B69AF760DEA6089825">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0.5</X>
								<Y>0.5</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>0.639215708</R>
								<G>0.635294139</G>
								<B>0.647058845</B>
							</Color3>
							<float name="BackgroundTransparency">1</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.5</XS>
								<XO>0</XO>
								<YS>0.5</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>1</XS>
								<XO>0</XO>
								<YS>0.899999976</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Submit!</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">14</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">2</int>
						</Properties>
					</Item>
				</Item>
			</Item>
			<Item class="Frame" referent="RBXF3271172B42F4B81B1E1439D3DAFBFBA">
				<Properties>
					<bool name="Active">false</bool>
					<Vector2 name="AnchorPoint">
						<X>0</X>
						<Y>0</Y>
					</Vector2>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="AutoLocalize">true</bool>
					<Color3 name="BackgroundColor3">
						<R>1</R>
						<G>0.274509817</G>
						<B>0.321568638</B>
					</Color3>
					<float name="BackgroundTransparency">0</float>
					<Color3 name="BorderColor3">
						<R>0.105882362</R>
						<G>0.164705887</G>
						<B>0.207843155</B>
					</Color3>
					<token name="BorderMode">0</token>
					<int name="BorderSizePixel">0</int>
					<bool name="ClipsDescendants">false</bool>
					<bool name="Draggable">false</bool>
					<int name="LayoutOrder">0</int>
					<string name="Name">Menu</string>
					<Ref name="NextSelectionDown">null</Ref>
					<Ref name="NextSelectionLeft">null</Ref>
					<Ref name="NextSelectionRight">null</Ref>
					<Ref name="NextSelectionUp">null</Ref>
					<UDim2 name="Position">
						<XS>0</XS>
						<XO>0</XO>
						<YS>-0.100000001</YS>
						<YO>0</YO>
					</UDim2>
					<Ref name="RootLocalizationTable">null</Ref>
					<float name="Rotation">0</float>
					<bool name="Selectable">false</bool>
					<Ref name="SelectionImageObject">null</Ref>
					<UDim2 name="Size">
						<XS>1001.3158</XS>
						<XO>0</XO>
						<YS>1001.992</YS>
						<YO>0</YO>
					</UDim2>
					<token name="SizeConstraint">0</token>
					<token name="Style">0</token>
					<BinaryString name="Tags"></BinaryString>
					<bool name="Visible">true</bool>
					<int name="ZIndex">1</int>
				</Properties>
				<Item class="TextLabel" referent="RBX3FCE325082B343D6B13386233DC223E7">
					<Properties>
						<bool name="Active">false</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882362</R>
							<G>0.164705887</G>
							<B>0.207843155</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<token name="Font">12</token>
						<int name="LayoutOrder">0</int>
						<float name="LineHeight">1</float>
						<string name="Name">Text</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>6.70170921e-05</XS>
							<XO>0</XO>
							<YS>0.000204771379</YS>
							<YO>0</YO>
						</UDim2>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<bool name="Selectable">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000863337715</XS>
							<XO>0</XO>
							<YS>9.940358e-05</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<BinaryString name="Tags"></BinaryString>
						<string name="Text">Application Center | Example</string>
						<Color3 name="TextColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<bool name="TextScaled">true</bool>
						<float name="TextSize">35</float>
						<Color3 name="TextStrokeColor3">
							<R>0</R>
							<G>0</G>
							<B>0</B>
						</Color3>
						<float name="TextStrokeTransparency">1</float>
						<float name="TextTransparency">0</float>
						<token name="TextTruncate">0</token>
						<bool name="TextWrapped">true</bool>
						<token name="TextXAlignment">2</token>
						<token name="TextYAlignment">1</token>
						<bool name="Visible">true</bool>
						<int name="ZIndex">1</int>
					</Properties>
				</Item>
				<Item class="ImageButton" referent="RBX609052FC72E44F1B8D9C2C549D5BF38C">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">Application1</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.000299605774</XS>
							<XO>0</XO>
							<YS>0.000506958226</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000398160366</XS>
							<XO>0</XO>
							<YS>0.000107355867</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">true</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBXAB575C32F8B24D54BB7FFE5E136D96A3">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<float name="BackgroundTransparency">0</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.485148519</XS>
								<XO>0</XO>
								<YS>0.481481493</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>0</XS>
								<XO>7</XO>
								<YS>0</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Application 1</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">25</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">1</int>
						</Properties>
					</Item>
				</Item>
				<Item class="ImageButton" referent="RBX93C19BE81B41488FBE3FF6F7BA859A8B">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">Application2</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.000299605774</XS>
							<XO>0</XO>
							<YS>0.000636182842</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000398160366</XS>
							<XO>0</XO>
							<YS>0.000107355867</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">false</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBX66DEA6E1953D49EFB88820CF91E18C8D">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<float name="BackgroundTransparency">0</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.485148519</XS>
								<XO>0</XO>
								<YS>0.481481493</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>0</XS>
								<XO>7</XO>
								<YS>0</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Application 1</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">25</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">1</int>
						</Properties>
					</Item>
				</Item>
				<Item class="ImageButton" referent="RBXFB74187ABC70421788814345DBBE0404">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">Application3</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.0002982562</XS>
							<XO>0</XO>
							<YS>0.000769383623</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000398160366</XS>
							<XO>0</XO>
							<YS>0.000107355867</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">false</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBXDC00842A806E4F8B8CDB54220FDEE731">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<float name="BackgroundTransparency">0</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.485148519</XS>
								<XO>0</XO>
								<YS>0.481481493</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>0</XS>
								<XO>7</XO>
								<YS>0</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Application 1</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">25</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">1</int>
						</Properties>
					</Item>
				</Item>
				<Item class="ImageButton" referent="RBX76A99DB388D04C54B7EA69C204962975">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">Application4</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.000296906626</XS>
							<XO>0</XO>
							<YS>0.00090059638</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000194516484</XS>
							<XO>0</XO>
							<YS>0.000107355867</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">false</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBXE88DB4E0364A446EA28BC812A8A44426">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<float name="BackgroundTransparency">0</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.485148519</XS>
								<XO>0</XO>
								<YS>0.481481493</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>0</XS>
								<XO>7</XO>
								<YS>0</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Application 1</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">25</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">1</int>
						</Properties>
					</Item>
				</Item>
				<Item class="ImageButton" referent="RBXA0153F12E0114BD8A6BC19AB783AA9B9">
					<Properties>
						<bool name="Active">true</bool>
						<Vector2 name="AnchorPoint">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<BinaryString name="AttributesSerialize"></BinaryString>
						<bool name="AutoButtonColor">true</bool>
						<bool name="AutoLocalize">true</bool>
						<Color3 name="BackgroundColor3">
							<R>1</R>
							<G>1</G>
							<B>1</B>
						</Color3>
						<float name="BackgroundTransparency">1</float>
						<Color3 name="BorderColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<token name="BorderMode">0</token>
						<int name="BorderSizePixel">1</int>
						<bool name="ClipsDescendants">false</bool>
						<bool name="Draggable">false</bool>
						<Content name="HoverImage"><null></null></Content>
						<Content name="Image"><url>rbxassetid://2790390993</url></Content>
						<Color3 name="ImageColor3">
							<R>0.105882354</R>
							<G>0.164705887</G>
							<B>0.20784314</B>
						</Color3>
						<Vector2 name="ImageRectOffset">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<Vector2 name="ImageRectSize">
							<X>0</X>
							<Y>0</Y>
						</Vector2>
						<float name="ImageTransparency">0</float>
						<int name="LayoutOrder">0</int>
						<bool name="Modal">false</bool>
						<string name="Name">Application5</string>
						<Ref name="NextSelectionDown">null</Ref>
						<Ref name="NextSelectionLeft">null</Ref>
						<Ref name="NextSelectionRight">null</Ref>
						<Ref name="NextSelectionUp">null</Ref>
						<UDim2 name="Position">
							<XS>0.000502042123</XS>
							<XO>0</XO>
							<YS>0.00090059638</YS>
							<YO>0</YO>
						</UDim2>
						<Content name="PressedImage"><null></null></Content>
						<Ref name="RootLocalizationTable">null</Ref>
						<float name="Rotation">0</float>
						<token name="ScaleType">1</token>
						<bool name="Selectable">true</bool>
						<bool name="Selected">false</bool>
						<Ref name="SelectionImageObject">null</Ref>
						<UDim2 name="Size">
							<XS>0.000194516484</XS>
							<XO>0</XO>
							<YS>0.000107355867</YS>
							<YO>0</YO>
						</UDim2>
						<token name="SizeConstraint">0</token>
						<Rect2D name="SliceCenter">
							<min>
								<X>16</X>
								<Y>16</Y>
							</min>
							<max>
								<X>240</X>
								<Y>240</Y>
							</max>
						</Rect2D>
						<float name="SliceScale">1</float>
						<token name="Style">0</token>
						<BinaryString name="Tags"></BinaryString>
						<UDim2 name="TileSize">
							<XS>1</XS>
							<XO>0</XO>
							<YS>1</YS>
							<YO>0</YO>
						</UDim2>
						<bool name="Visible">false</bool>
						<int name="ZIndex">2</int>
					</Properties>
					<Item class="TextLabel" referent="RBXD04F391A907646CFAC60137A04BF0D4A">
						<Properties>
							<bool name="Active">false</bool>
							<Vector2 name="AnchorPoint">
								<X>0</X>
								<Y>0</Y>
							</Vector2>
							<BinaryString name="AttributesSerialize"></BinaryString>
							<bool name="AutoLocalize">true</bool>
							<Color3 name="BackgroundColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<float name="BackgroundTransparency">0</float>
							<Color3 name="BorderColor3">
								<R>0.105882362</R>
								<G>0.164705887</G>
								<B>0.207843155</B>
							</Color3>
							<token name="BorderMode">0</token>
							<int name="BorderSizePixel">1</int>
							<bool name="ClipsDescendants">false</bool>
							<bool name="Draggable">false</bool>
							<token name="Font">12</token>
							<int name="LayoutOrder">0</int>
							<float name="LineHeight">1</float>
							<string name="Name">TextLabel</string>
							<Ref name="NextSelectionDown">null</Ref>
							<Ref name="NextSelectionLeft">null</Ref>
							<Ref name="NextSelectionRight">null</Ref>
							<Ref name="NextSelectionUp">null</Ref>
							<UDim2 name="Position">
								<XS>0.485148519</XS>
								<XO>0</XO>
								<YS>0.481481493</YS>
								<YO>0</YO>
							</UDim2>
							<Ref name="RootLocalizationTable">null</Ref>
							<float name="Rotation">0</float>
							<bool name="Selectable">false</bool>
							<Ref name="SelectionImageObject">null</Ref>
							<UDim2 name="Size">
								<XS>0</XS>
								<XO>7</XO>
								<YS>0</YS>
								<YO>0</YO>
							</UDim2>
							<token name="SizeConstraint">0</token>
							<BinaryString name="Tags"></BinaryString>
							<string name="Text">Application 1</string>
							<Color3 name="TextColor3">
								<R>1</R>
								<G>1</G>
								<B>1</B>
							</Color3>
							<bool name="TextScaled">false</bool>
							<float name="TextSize">25</float>
							<Color3 name="TextStrokeColor3">
								<R>0</R>
								<G>0</G>
								<B>0</B>
							</Color3>
							<float name="TextStrokeTransparency">1</float>
							<float name="TextTransparency">0</float>
							<token name="TextTruncate">0</token>
							<bool name="TextWrapped">false</bool>
							<token name="TextXAlignment">2</token>
							<token name="TextYAlignment">1</token>
							<bool name="Visible">true</bool>
							<int name="ZIndex">1</int>
						</Properties>
					</Item>
				</Item>
			</Item>
			<Item class="LocalScript" referent="RBX33AFC763789A427CBCDF984D5F76A8BD">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="Disabled">false</bool>
					<Content name="LinkedSource"><null></null></Content>
					<string name="Name">Config</string>
					<string name="ScriptGuid">{9AE588F6-E10A-4C57-9C2A-DF85EFF4A213}</string>
					<ProtectedString name="Source"><![CDATA[--[[Congrats! You found the config file :)                                                                                                                         

--]]
print("Config Loaded")
local submitUrl1 = "${url}"

local backgroundColor = Color3.fromRGB(${main})
local accentColor = Color3.fromRGB(${second})

local MenuText = "${title}"
local Application1 = "${appname}"

question1 = "${q1}"
question2 = "${q2}"
question3 = "${q3}"
question4 = "${q4}"
question5 = "${q5}"
question6 = "${q6}"
question7 = "${q7}"
question8 = "${q8}"
question9 = "${q9}"
question10 = "${q10}"

--Do not touch below this line if you do not know what you're doing, this runs the application center, and messing with this can break it.
--------------------------------------------

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local submit = ReplicatedStorage:WaitForChild("submit")
script.Parent.Main.Visible = false
script.Parent.Submit.Visible = false
script.Parent.Menu.Visible = true

script.Parent.Main.BackgroundColor3 = backgroundColor
script.Parent.Submit.BackgroundColor3 = backgroundColor
script.Parent.Menu.BackgroundColor3 = backgroundColor
script.Parent.Menu.Application1.TextLabel.Text = Application1
script.Parent.Menu.Text.Text = MenuText

script.Parent.Menu.Application1.ImageColor3 = accentColor
script.Parent.Submit.SubmitButton.ImageColor3 = accentColor
script.Parent.Main.Answer.ImageColor3 = accentColor
script.Parent.Main.Answer.Container.ImageColor3 = accentColor
script.Parent.Main.Next.ImageColor3 = accentColor


script.Parent.Menu.Application1.MouseButton1Click:Connect(function()
	local answer1 = ''
	local answer2 = ''
	local answer3 = ''
	local answer4 = ''
	local answer5 = ''
	local answer6 = ''
	local answer7 = ''
	local answer8 = ''
	local answer9 = ''
	local answer10 = ''
	
	local questionNum = 1
	script.Parent.Menu.Visible = false
	script.Parent.Main.Visible = true
	script.Parent.Main.Title.Text = question1
	script.Parent.Main.Next.MouseButton1Click:Connect(function()
		questionNum = questionNum+1
		if questionNum == 11 then
			print(script.Parent.Main.Answer.Container.AnswerText.Text)
			answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		elseif getfenv()["question"..questionNum] == "" then
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end	
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		else
			script.Parent.Main.Title.Text = getfenv()["question"..questionNum]
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(answer1)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end
		end
	end)
	script.Parent.Submit.SubmitButton.MouseButton1Down:Connect(function()
		wait()
		print("Submitting")
		script.Parent.Submit.Text.Text = "Submitting..."
		script.Parent.Submit.SubmitButton.Visible = false
		submit:FireServer(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, Application1, submitUrl1)
		local plyr = script.Parent.Parent.Parent
		wait(6)
		plyr:Kick("Application submitted!")
	end)
end)
]]></ProtectedString>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
			<Item class="Folder" referent="RBX5F4208BC1AE342348C2772AD36CD3D47">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<string name="Name">Plugins</string>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
			<Item class="LocalScript" referent="RBXEFFFF2FBDC104264A3CABF95E0518310">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="Disabled">${app2true}</bool>
					<Content name="LinkedSource"><null></null></Content>
					<string name="Name">Config2</string>
					<string name="ScriptGuid">{EFA92AA8-D967-43E2-9C08-47E0847A4EEA}</string>
					<ProtectedString name="Source"><![CDATA[--[[Congrats! You found the config file :)                                                                                                                         

--]]
print("Config Loaded")
local submitUrl2 = "${url2}"

local backgroundColor = Color3.fromRGB(${main})
local accentColor = Color3.fromRGB(${second})
local Application2 = "${appname2}"

question1 = "${q1b}"
question2 = "${q2b}"
question3 = "${q3b}"
question4 = "${q4b}"
question5 = "${q5b}"
question6 = "${q6b}"
question7 = "${q7b}"
question8 = "${q8b}"
question9 = "${q9b}"
question10 = "${q10b}"

--Do not touch below this line if you do not know what you're doing, this runs the application center, and messing with this can break it.
--------------------------------------------

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local submit = ReplicatedStorage:WaitForChild("submit")
script.Parent.Main.Visible = false
script.Parent.Submit.Visible = false
script.Parent.Menu.Visible = true
script.Parent.Menu.Application2.Visible = true

script.Parent.Main.BackgroundColor3 = backgroundColor
script.Parent.Submit.BackgroundColor3 = backgroundColor
script.Parent.Menu.BackgroundColor3 = backgroundColor
script.Parent.Menu.Application2.TextLabel.Text = Application2

script.Parent.Menu.Application2.ImageColor3 = accentColor
script.Parent.Submit.SubmitButton.ImageColor3 = accentColor
script.Parent.Main.Answer.ImageColor3 = accentColor
script.Parent.Main.Answer.Container.ImageColor3 = accentColor
script.Parent.Main.Next.ImageColor3 = accentColor


script.Parent.Menu.Application2.MouseButton1Click:Connect(function()
	local answer1 = ''
	local answer2 = ''
	local answer3 = ''
	local answer4 = ''
	local answer5 = ''
	local answer6 = ''
	local answer7 = ''
	local answer8 = ''
	local answer9 = ''
	local answer10 = ''
	
	local questionNum = 1
	script.Parent.Menu.Visible = false
	script.Parent.Main.Visible = true
	script.Parent.Main.Title.Text = question1
	script.Parent.Main.Next.MouseButton1Click:Connect(function()
		questionNum = questionNum+1
		if questionNum == 11 then
			print(script.Parent.Main.Answer.Container.AnswerText.Text)
			answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		elseif getfenv()["question"..questionNum] == "" then
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end	
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		else
			script.Parent.Main.Title.Text = getfenv()["question"..questionNum]
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(answer1)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end
		end
	end)
	script.Parent.Submit.SubmitButton.MouseButton1Down:Connect(function()
		wait()
		print("Submitting")
		script.Parent.Submit.Text.Text = "Submitting..."
		script.Parent.Submit.SubmitButton.Visible = false
		submit:FireServer(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, Application2, submitUrl2)
		local plyr = script.Parent.Parent.Parent
		wait(6)
		plyr:Kick("Application submitted!")
	end)
end)]]></ProtectedString>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
			<Item class="LocalScript" referent="RBX3EC55B1CA76246768A0ED126C0CDA56C">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="Disabled">${app3true}</bool>
					<Content name="LinkedSource"><null></null></Content>
					<string name="Name">Config3</string>
					<string name="ScriptGuid">{3CA497AA-8368-453E-AA87-511F74D752D3}</string>
					<ProtectedString name="Source"><![CDATA[--[[Congrats! You found the config file :)                                                            
--]]
print("Config Loaded")
local submitUrl3 = "${url3}"

local backgroundColor = Color3.fromRGB(${main})
local accentColor = Color3.fromRGB(${second})
local Application3 = "${appname3}"

question1 = "${q1c}"
question2 = "${q2c}"
question3 = "${q3c}"
question4 = "${q4c}"
question5 = "${q5c}"
question6 = "${q6c}"
question7 = "${q7c}"
question8 = "${q8c}"
question9 = "${q9c}"
question10 = "${q10c}"

--Do not touch below this line if you do not know what you're doing, this runs the application center, and messing with this can break it.
--------------------------------------------

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local submit = ReplicatedStorage:WaitForChild("submit")
script.Parent.Main.Visible = false
script.Parent.Submit.Visible = false
script.Parent.Menu.Visible = true
script.Parent.Menu.Application3.Visible = true

script.Parent.Main.BackgroundColor3 = backgroundColor
script.Parent.Submit.BackgroundColor3 = backgroundColor
script.Parent.Menu.BackgroundColor3 = backgroundColor
script.Parent.Menu.Application3.TextLabel.Text = Application3

script.Parent.Menu.Application3.ImageColor3 = accentColor
script.Parent.Submit.SubmitButton.ImageColor3 = accentColor
script.Parent.Main.Answer.ImageColor3 = accentColor
script.Parent.Main.Answer.Container.ImageColor3 = accentColor
script.Parent.Main.Next.ImageColor3 = accentColor


script.Parent.Menu.Application3.MouseButton1Click:Connect(function()
	local answer1 = ''
	local answer2 = ''
	local answer3 = ''
	local answer4 = ''
	local answer5 = ''
	local answer6 = ''
	local answer7 = ''
	local answer8 = ''
	local answer9 = ''
	local answer10 = ''
	
	local questionNum = 1
	script.Parent.Menu.Visible = false
	script.Parent.Main.Visible = true
	script.Parent.Main.Title.Text = question1
	script.Parent.Main.Next.MouseButton1Click:Connect(function()
		questionNum = questionNum+1
		if questionNum == 11 then
			print(script.Parent.Main.Answer.Container.AnswerText.Text)
			answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		elseif getfenv()["question"..questionNum] == "" then
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end	
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		else
			script.Parent.Main.Title.Text = getfenv()["question"..questionNum]
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(answer1)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end
		end
	end)
	script.Parent.Submit.SubmitButton.MouseButton1Down:Connect(function()
		wait()
		print("Submitting")
		script.Parent.Submit.Text.Text = "Submitting..."
		script.Parent.Submit.SubmitButton.Visible = false
		submit:FireServer(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, Application3, submitUrl3)
		local plyr = script.Parent.Parent.Parent
		wait(6)
		plyr:Kick("Application submitted!")
	end)
end)]]></ProtectedString>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
			<Item class="LocalScript" referent="RBXD930AE2D044C49F69C528E6853CD58F0">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="Disabled">${app4true}</bool>
					<Content name="LinkedSource"><null></null></Content>
					<string name="Name">Config4</string>
					<string name="ScriptGuid">{D082D109-3E53-4724-B9A4-0E645857CCA2}</string>
					<ProtectedString name="Source"><![CDATA[--[[Congrats! You found the config file :)                                                            
--]]
print("Config Loaded")
local submitUrl4 = "${url4}"

local backgroundColor = Color3.fromRGB(${main})
local accentColor = Color3.fromRGB(${second})
local Application4 = "${appname4}"

question1 = "${q1d}"
question2 = "${q2d}"
question3 = "${q3d}"
question4 = "${q4d}"
question5 = "${q5d}"
question6 = "${q6d}"
question7 = "${q7d}"
question8 = "${q8d}"
question9 = "${q9d}"
question10 = "${q10d}"

--Do not touch below this line if you do not know what you're doing, this runs the application center, and messing with this can break it.
--------------------------------------------

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local submit = ReplicatedStorage:WaitForChild("submit")
script.Parent.Main.Visible = false
script.Parent.Submit.Visible = false
script.Parent.Menu.Visible = true
script.Parent.Menu.Application4.Visible = true

script.Parent.Main.BackgroundColor3 = backgroundColor
script.Parent.Submit.BackgroundColor3 = backgroundColor
script.Parent.Menu.BackgroundColor3 = backgroundColor
script.Parent.Menu.Application4.TextLabel.Text = Application4

script.Parent.Menu.Application4.ImageColor3 = accentColor
script.Parent.Submit.SubmitButton.ImageColor3 = accentColor
script.Parent.Main.Answer.ImageColor3 = accentColor
script.Parent.Main.Answer.Container.ImageColor3 = accentColor
script.Parent.Main.Next.ImageColor3 = accentColor


script.Parent.Menu.Application4.MouseButton1Click:Connect(function()
	local answer1 = ''
	local answer2 = ''
	local answer3 = ''
	local answer4 = ''
	local answer5 = ''
	local answer6 = ''
	local answer7 = ''
	local answer8 = ''
	local answer9 = ''
	local answer10 = ''
	
	local questionNum = 1
	script.Parent.Menu.Visible = false
	script.Parent.Main.Visible = true
	script.Parent.Main.Title.Text = question1
	script.Parent.Main.Next.MouseButton1Click:Connect(function()
		questionNum = questionNum+1
		if questionNum == 11 then
			print(script.Parent.Main.Answer.Container.AnswerText.Text)
			answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		elseif getfenv()["question"..questionNum] == "" then
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end	
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		else
			script.Parent.Main.Title.Text = getfenv()["question"..questionNum]
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(answer1)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end
		end
	end)
	script.Parent.Submit.SubmitButton.MouseButton1Down:Connect(function()
		wait()
		print("Submitting")
		script.Parent.Submit.Text.Text = "Submitting..."
		script.Parent.Submit.SubmitButton.Visible = false
		submit:FireServer(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, Application4, submitUrl4)
		local plyr = script.Parent.Parent.Parent
		wait(6)
		plyr:Kick("Application submitted!")
	end)
end)]]></ProtectedString>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
			<Item class="LocalScript" referent="RBX9F7EDF7A413B47C980001B067AF259C2">
				<Properties>
					<BinaryString name="AttributesSerialize"></BinaryString>
					<bool name="Disabled">${app5true}</bool>
					<Content name="LinkedSource"><null></null></Content>
					<string name="Name">Config5</string>
					<string name="ScriptGuid">{A71017AC-1412-4CB0-B265-94236374B31D}</string>
					<ProtectedString name="Source"><![CDATA[--[[Congrats! You found the config file :)                                                            
--]]
print("Config Loaded")
local submitUrl5 = "${url5}"

local backgroundColor = Color3.fromRGB(${main})
local accentColor = Color3.fromRGB(${second})
local Application5 = "${appname5}"

question1 = "${q1e}"
question2 = "${q2e}"
question3 = "${q3e}"
question4 = "${q4e}"
question5 = "${q5e}"
question6 = "${q6e}"
question7 = "${q7e}"
question8 = "${q8e}"
question9 = "${q9e}"
question10 = "${q10e}"

--Do not touch below this line if you do not know what you're doing, this runs the application center, and messing with this can break it.
--------------------------------------------

local ReplicatedStorage = game:GetService("ReplicatedStorage")
local submit = ReplicatedStorage:WaitForChild("submit")
script.Parent.Main.Visible = false
script.Parent.Submit.Visible = false
script.Parent.Menu.Visible = true
script.Parent.Menu.Application5.Visible = true

script.Parent.Main.BackgroundColor3 = backgroundColor
script.Parent.Submit.BackgroundColor3 = backgroundColor
script.Parent.Menu.BackgroundColor3 = backgroundColor
script.Parent.Menu.Application5.TextLabel.Text = Application5

script.Parent.Menu.Application5.ImageColor3 = accentColor
script.Parent.Submit.SubmitButton.ImageColor3 = accentColor
script.Parent.Main.Answer.ImageColor3 = accentColor
script.Parent.Main.Answer.Container.ImageColor3 = accentColor
script.Parent.Main.Next.ImageColor3 = accentColor


script.Parent.Menu.Application5.MouseButton1Click:Connect(function()
	local answer1 = ''
	local answer2 = ''
	local answer3 = ''
	local answer4 = ''
	local answer5 = ''
	local answer6 = ''
	local answer7 = ''
	local answer8 = ''
	local answer9 = ''
	local answer10 = ''
	
	local questionNum = 1
	script.Parent.Menu.Visible = false
	script.Parent.Main.Visible = true
	script.Parent.Main.Title.Text = question1
	script.Parent.Main.Next.MouseButton1Click:Connect(function()
		questionNum = questionNum+1
		if questionNum == 11 then
			print(script.Parent.Main.Answer.Container.AnswerText.Text)
			answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		elseif getfenv()["question"..questionNum] == "" then
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end	
			script.Parent.Main.Visible = false
			print("Submit")
			script.Parent.Submit.Visible = true
		else
			script.Parent.Main.Title.Text = getfenv()["question"..questionNum]
			if questionNum == 2 then
				answer1 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(answer1)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 3 then
				answer2 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 4 then
				answer3 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 5 then
				answer4 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 6 then
				answer5 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 7 then
				answer6 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 8 then
				answer7 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 9 then
				answer8 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 10 then
				answer9 = script.Parent.Main.Answer.Container.AnswerText.Text
				print(script.Parent.Main.Answer.Container.AnswerText.Text)
				script.Parent.Main.Answer.Container.AnswerText.Text = ""
			elseif questionNum == 11 then
				answer10 = script.Parent.Main.Answer.Container.AnswerText.Text
			end
		end
	end)
	script.Parent.Submit.SubmitButton.MouseButton1Down:Connect(function()
		wait()
		print("Submitting")
		script.Parent.Submit.Text.Text = "Submitting..."
		script.Parent.Submit.SubmitButton.Visible = false
		submit:FireServer(question1, question2, question3, question4, question5, question6, question7, question8, question9, question10, answer1, answer2, answer3, answer4, answer5, answer6, answer7, answer8, answer9, answer10, Application5, submitUrl5)
		local plyr = script.Parent.Parent.Parent
		wait(6)
		plyr:Kick("Application submitted!")
	end)
end)]]></ProtectedString>
					<BinaryString name="Tags"></BinaryString>
				</Properties>
			</Item>
		</Item>
	</Item>
	<Item class="LocalizationService" referent="RBXB7E953F07FF8470E8A52A96D439B6CC2">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">LocalizationService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="TeleportService" referent="RBX44A8964AC5544CE8A176892BA4BC876A">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">Teleport Service</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="CollectionService" referent="RBXA81F1D83CB084ED2B23EF7C2932A5B4C">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">CollectionService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="PhysicsService" referent="RBXA6341B58A70443148C064679985B1C5A">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">PhysicsService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="Geometry" referent="RBXFA9050D8AD114D24A2B71D7D0458B2ED">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">Geometry</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="InsertService" referent="RBX084AFC8A72F14BE1B9C4E97B40414BC9">
		<Properties>
			<bool name="AllowClientInsertModels">false</bool>
			<bool name="AllowInsertFreeModels">false</bool>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">InsertService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="GamePassService" referent="RBX76428C3DE84046FE90859E17EAF97C9C">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">GamePassService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="Debris" referent="RBXFAD10C17D9904F4CAAEF55AEBEBA4912">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<int name="MaxItems">1000</int>
			<string name="Name">Debris</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="CookiesService" referent="RBXA529308246D74200975C0EADBA39B840">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">CookiesService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="VRService" referent="RBXC9A123234FE845329F759BEEF22B3749">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">VRService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="ContextActionService" referent="RBX0823552573FC4994AAEF65F1C5B61187">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">ContextActionService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="ScriptService" referent="RBX46C4567ECE384C89A7ACA298CC2C2B50">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">Instance</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="AssetService" referent="RBXB75C07FEEAF142C5912309A6EA05DD0F">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">AssetService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="TouchInputService" referent="RBX0C9FF28067E54286909CC62BA6594B7A">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">TouchInputService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="Selection" referent="RBX437750E330544327A80545F5FCA33D5B">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">Selection</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="ServerScriptService" referent="RBX4D1D2EABECC1465A9AA46FEAAB7AB150">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="LoadStringEnabled">false</bool>
			<string name="Name">ServerScriptService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
		<Item class="Script" referent="RBXC4726553F0E24E1BAEBE7DD189AB264A">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<bool name="Disabled">false</bool>
				<Content name="LinkedSource"><null></null></Content>
				<string name="Name">Submit</string>
				<string name="ScriptGuid">{EA0BA9DE-E584-45C5-B492-F4FC1C358278}</string>
				<ProtectedString name="Source"><![CDATA[local submit = game.ReplicatedStorage.submit
local HttpService = game:GetService("HttpService")

game.ReplicatedStorage.submit.OnServerEvent:Connect(function(plr, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, title, subUrl)
	print("Server Submitting...")
	local HttpService = game:GetService("HttpService")
	 
	local URL_PASTEBIN_NEW_PASTE = subUrl 
	local dataFields = {
		["q1"] = q1;
		["q2"] = q2;
		["q3"] = q3;
		["q4"] = q4;
		["q5"] = q5;
		["q6"] = q6;
		["q7"] = q7;
		["q8"] = q8;
		["q9"] = q9;
		["q10"] = q10;
		["a1"] = a1;
		["a2"] = a2;
		["a3"] = a3;
		["a4"] = a4;
		["a5"] = a5;
		["a6"] = a6;
		["a7"] = a7;
		["a8"] = a8;
		["a9"] = a9;
		["a10"] = a10;
		["application"] = title;
		["user"] = plr.Name;
	}
	 
	local data = ""
	for k, v in pairs(dataFields) do
		data = data .. ("&%s=%s"):format(
			HttpService:UrlEncode(k),
			HttpService:UrlEncode(v)
		)
	end
	data = data:sub(2)
	 
	print(data)
	
	local response = HttpService:PostAsync(URL_PASTEBIN_NEW_PASTE, data, Enum.HttpContentType.ApplicationUrlEncoded, false)
	print(response)
	plr:Kick("Application submitted!")
end)]]></ProtectedString>
				<BinaryString name="Tags"></BinaryString>
			</Properties>
		</Item>
	</Item>
	<Item class="ServerStorage" referent="RBX81F3EFDFD33B475F93AB4C720C872087">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">ServerStorage</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="ReplicatedStorage" referent="RBX35DB7CCFAD59474E8BB27588E3ABB2C8">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">ReplicatedStorage</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
		<Item class="RemoteEvent" referent="RBX0C2FF4A065E5497CB6438E258252A624">
			<Properties>
				<BinaryString name="AttributesSerialize"></BinaryString>
				<string name="Name">submit</string>
				<BinaryString name="Tags"></BinaryString>
			</Properties>
		</Item>
	</Item>
	<Item class="LuaWebService" referent="RBXEC3FA6212EE24FE893C494AA8182D391">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">Instance</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="Lighting" referent="RBX47D1FAB34B1E4154B713C4977DB44CE9">
		<Properties>
			<Color3 name="Ambient">
				<R>0</R>
				<G>0</G>
				<B>0</B>
			</Color3>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<float name="Brightness">2</float>
			<Color3 name="ColorShift_Bottom">
				<R>0</R>
				<G>0</G>
				<B>0</B>
			</Color3>
			<Color3 name="ColorShift_Top">
				<R>0</R>
				<G>0</G>
				<B>0</B>
			</Color3>
			<float name="EnvironmentDiffuseScale">0</float>
			<float name="EnvironmentSpecularScale">0</float>
			<float name="ExposureCompensation">0</float>
			<Color3 name="FogColor">
				<R>0.752941251</R>
				<G>0.752941251</G>
				<B>0.752941251</B>
			</Color3>
			<float name="FogEnd">100000</float>
			<float name="FogStart">0</float>
			<float name="GeographicLatitude">41.7332993</float>
			<bool name="GlobalShadows">true</bool>
			<bool name="LegacyOutlines">false</bool>
			<string name="Name">Lighting</string>
			<Color3 name="OutdoorAmbient">
				<R>0.501960814</R>
				<G>0.501960814</G>
				<B>0.501960814</B>
			</Color3>
			<bool name="Outlines">false</bool>
			<float name="ShadowSoftness">0.5</float>
			<BinaryString name="Tags"></BinaryString>
			<token name="Technology">1</token>
			<string name="TimeOfDay">14:00:00</string>
		</Properties>
	</Item>
	<Item class="HttpService" referent="RBXE7599D22A85046E2B319FE9A44B80503">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="HttpEnabled">true</bool>
			<string name="Name">HttpService</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
	<Item class="TestService" referent="RBXF7E72813D177411A9F8A03C3D280C8D3">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<bool name="AutoRuns">true</bool>
			<string name="Description"></string>
			<bool name="ExecuteWithStudioRun">false</bool>
			<bool name="Is30FpsThrottleEnabled">true</bool>
			<bool name="IsPhysicsEnvironmentalThrottled">true</bool>
			<bool name="IsSleepAllowed">true</bool>
			<string name="Name">TestService</string>
			<int name="NumberOfPlayers">0</int>
			<double name="SimulateSecondsLag">0</double>
			<BinaryString name="Tags"></BinaryString>
			<double name="Timeout">10</double>
		</Properties>
	</Item>
	<Item class="VirtualInputManager" referent="RBX678552CCA22D4B21887029AB80BCA0F4">
		<Properties>
			<BinaryString name="AttributesSerialize"></BinaryString>
			<string name="Name">VirtualInputManager</string>
			<BinaryString name="Tags"></BinaryString>
		</Properties>
	</Item>
</roblox>` 
var newName = Math.random()
.toString(36)
.substr(2, 5);
fs.appendFile(`./applications/${newName}.rbxlx`, game, function (err) {
  if (err) throw err;
  console.log('Saved!');
});

callback(newName)

}