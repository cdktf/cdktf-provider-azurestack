# `lbNatRule` Submodule <a name="`lbNatRule` Submodule" id="@cdktf/provider-azurestack.lbNatRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbNatRule <a name="LbNatRule" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule azurestack_lb_nat_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRule;

LbNatRule.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backendPort(java.lang.Number)
    .frontendIpConfigurationName(java.lang.String)
    .frontendPort(java.lang.Number)
    .loadbalancerId(java.lang.String)
    .name(java.lang.String)
    .protocol(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .enableFloatingIp(java.lang.Boolean)
//  .enableFloatingIp(IResolvable)
//  .id(java.lang.String)
//  .idleTimeoutInMinutes(java.lang.Number)
//  .timeouts(LbNatRuleTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#backend_port LbNatRule#backend_port}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.frontendIpConfigurationName">frontendIpConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.frontendPort">frontendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_port LbNatRule#frontend_port}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#name LbNatRule#name}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#protocol LbNatRule#protocol}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.enableFloatingIp">enableFloatingIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#id LbNatRule#id}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.backendPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#backend_port LbNatRule#backend_port}.

---

##### `frontendIpConfigurationName`<sup>Required</sup> <a name="frontendIpConfigurationName" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.frontendIpConfigurationName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}.

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.frontendPort"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_port LbNatRule#frontend_port}.

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.loadbalancerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#name LbNatRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#protocol LbNatRule#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}.

---

##### `enableFloatingIp`<sup>Optional</sup> <a name="enableFloatingIp" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.enableFloatingIp"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#id LbNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.idleTimeoutInMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#timeouts LbNatRule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetEnableFloatingIp">resetEnableFloatingIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetIdleTimeoutInMinutes">resetIdleTimeoutInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.putTimeouts"></a>

```java
public void putTimeouts(LbNatRuleTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>

---

##### `resetEnableFloatingIp` <a name="resetEnableFloatingIp" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetEnableFloatingIp"></a>

```java
public void resetEnableFloatingIp()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetId"></a>

```java
public void resetId()
```

##### `resetIdleTimeoutInMinutes` <a name="resetIdleTimeoutInMinutes" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetIdleTimeoutInMinutes"></a>

```java
public void resetIdleTimeoutInMinutes()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRule;

LbNatRule.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRule;

LbNatRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRule;

LbNatRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.backendIpConfigurationId">backendIpConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendIpConfigurationId">frontendIpConfigurationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference">LbNatRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.backendPortInput">backendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.enableFloatingIpInput">enableFloatingIpInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendIpConfigurationNameInput">frontendIpConfigurationNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendPortInput">frontendPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.idleTimeoutInMinutesInput">idleTimeoutInMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.loadbalancerIdInput">loadbalancerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.enableFloatingIp">enableFloatingIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendIpConfigurationName">frontendIpConfigurationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendPort">frontendPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendIpConfigurationId`<sup>Required</sup> <a name="backendIpConfigurationId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.backendIpConfigurationId"></a>

```java
public java.lang.String getBackendIpConfigurationId();
```

- *Type:* java.lang.String

---

##### `frontendIpConfigurationId`<sup>Required</sup> <a name="frontendIpConfigurationId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendIpConfigurationId"></a>

```java
public java.lang.String getFrontendIpConfigurationId();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.timeouts"></a>

```java
public LbNatRuleTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference">LbNatRuleTimeoutsOutputReference</a>

---

##### `backendPortInput`<sup>Optional</sup> <a name="backendPortInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.backendPortInput"></a>

```java
public java.lang.Number getBackendPortInput();
```

- *Type:* java.lang.Number

---

##### `enableFloatingIpInput`<sup>Optional</sup> <a name="enableFloatingIpInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.enableFloatingIpInput"></a>

```java
public java.lang.Object getEnableFloatingIpInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frontendIpConfigurationNameInput`<sup>Optional</sup> <a name="frontendIpConfigurationNameInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendIpConfigurationNameInput"></a>

```java
public java.lang.String getFrontendIpConfigurationNameInput();
```

- *Type:* java.lang.String

---

##### `frontendPortInput`<sup>Optional</sup> <a name="frontendPortInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendPortInput"></a>

```java
public java.lang.Number getFrontendPortInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutesInput`<sup>Optional</sup> <a name="idleTimeoutInMinutesInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.idleTimeoutInMinutesInput"></a>

```java
public java.lang.Number getIdleTimeoutInMinutesInput();
```

- *Type:* java.lang.Number

---

##### `loadbalancerIdInput`<sup>Optional</sup> <a name="loadbalancerIdInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.loadbalancerIdInput"></a>

```java
public java.lang.String getLoadbalancerIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

---

##### `enableFloatingIp`<sup>Required</sup> <a name="enableFloatingIp" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.enableFloatingIp"></a>

```java
public java.lang.Object getEnableFloatingIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `frontendIpConfigurationName`<sup>Required</sup> <a name="frontendIpConfigurationName" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendIpConfigurationName"></a>

```java
public java.lang.String getFrontendIpConfigurationName();
```

- *Type:* java.lang.String

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.frontendPort"></a>

```java
public java.lang.Number getFrontendPort();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInMinutes`<sup>Required</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.lbNatRule.LbNatRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbNatRuleConfig <a name="LbNatRuleConfig" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRuleConfig;

LbNatRuleConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .backendPort(java.lang.Number)
    .frontendIpConfigurationName(java.lang.String)
    .frontendPort(java.lang.Number)
    .loadbalancerId(java.lang.String)
    .name(java.lang.String)
    .protocol(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .enableFloatingIp(java.lang.Boolean)
//  .enableFloatingIp(IResolvable)
//  .id(java.lang.String)
//  .idleTimeoutInMinutes(java.lang.Number)
//  .timeouts(LbNatRuleTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.backendPort">backendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#backend_port LbNatRule#backend_port}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.frontendIpConfigurationName">frontendIpConfigurationName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.frontendPort">frontendPort</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_port LbNatRule#frontend_port}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.loadbalancerId">loadbalancerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#name LbNatRule#name}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#protocol LbNatRule#protocol}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.enableFloatingIp">enableFloatingIp</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#id LbNatRule#id}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.idleTimeoutInMinutes">idleTimeoutInMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backendPort`<sup>Required</sup> <a name="backendPort" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.backendPort"></a>

```java
public java.lang.Number getBackendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#backend_port LbNatRule#backend_port}.

---

##### `frontendIpConfigurationName`<sup>Required</sup> <a name="frontendIpConfigurationName" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.frontendIpConfigurationName"></a>

```java
public java.lang.String getFrontendIpConfigurationName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_ip_configuration_name LbNatRule#frontend_ip_configuration_name}.

---

##### `frontendPort`<sup>Required</sup> <a name="frontendPort" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.frontendPort"></a>

```java
public java.lang.Number getFrontendPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#frontend_port LbNatRule#frontend_port}.

---

##### `loadbalancerId`<sup>Required</sup> <a name="loadbalancerId" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.loadbalancerId"></a>

```java
public java.lang.String getLoadbalancerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#loadbalancer_id LbNatRule#loadbalancer_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#name LbNatRule#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#protocol LbNatRule#protocol}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#resource_group_name LbNatRule#resource_group_name}.

---

##### `enableFloatingIp`<sup>Optional</sup> <a name="enableFloatingIp" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.enableFloatingIp"></a>

```java
public java.lang.Object getEnableFloatingIp();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#enable_floating_ip LbNatRule#enable_floating_ip}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#id LbNatRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `idleTimeoutInMinutes`<sup>Optional</sup> <a name="idleTimeoutInMinutes" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.idleTimeoutInMinutes"></a>

```java
public java.lang.Number getIdleTimeoutInMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#idle_timeout_in_minutes LbNatRule#idle_timeout_in_minutes}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleConfig.property.timeouts"></a>

```java
public LbNatRuleTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#timeouts LbNatRule#timeouts}

---

### LbNatRuleTimeouts <a name="LbNatRuleTimeouts" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRuleTimeouts;

LbNatRuleTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#create LbNatRule#create}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#delete LbNatRule#delete}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#read LbNatRule#read}. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#update LbNatRule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#create LbNatRule#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#delete LbNatRule#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#read LbNatRule#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/r/lb_nat_rule#update LbNatRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbNatRuleTimeoutsOutputReference <a name="LbNatRuleTimeoutsOutputReference" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.lb_nat_rule.LbNatRuleTimeoutsOutputReference;

new LbNatRuleTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.lbNatRule.LbNatRuleTimeouts">LbNatRuleTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



